import math
import pandas_datareader as web
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import Dense, LSTM
import matplotlib.pyplot as plt

plt.style.use('fivethirtyeight')

#Get the stock quote
stock_name = 'BA'
start_year = '2012'
start_month = '01'
start_day = '01'

start_string = start_year + "-" + start_month + "-" + start_day

today_year = '2020'
today_month = '05'
today_day = '05'

today_string = today_year + "-" + today_month + "-" + today_day
df = web.DataReader(stock_name, data_source='yahoo', start=start_string, end=today_string)

#Show the data
print(df)

print(df.shape)

"""
#vislualize the closing price history
plt.figure(figsize=(16,8))
plt.title('Close Price History')
plt.plot(df['Close'])
plt.xlabel('Date', fontsize=18)
plt.ylabel('Close Price USD ($)', fontsize=18)
plt.show()
"""

#create a new dataframe with only the "Close" column
data = df.filter(['Close'])

#Convert the dataframe into a numpy array
dataset = data.values

#Get the number of rows to train the model on
training_data_len = math.ceil(len(dataset)*.8)

print(training_data_len)

# Scale the data
scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(dataset) # type is numpy.ndarray

print(scaled_data)

#Create the training data set
#Create the scaled training data set

train_data = scaled_data[0:training_data_len, :]
#Split the data into x_train and y_train datasets

x_train = []
y_train = []

for i in range(60, len(train_data)):
    x_train.append(train_data[i-60:i,0])
    y_train.append(train_data[i, 0])
    if i <= 60:
        print(x_train)
        print(y_train)
        print()

#Convert the x_train and y_train to numpy arrays

x_train, y_train = np.array(x_train), np.array(y_train)

#Reshape the data
x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
print(x_train.shape)

#Build the LSTM model
model = Sequential()
model.add(LSTM(50, return_sequences=True, input_shape = (x_train.shape[1], 1)))
model.add(LSTM(50, return_sequences=False))
model.add(Dense(25))
model.add(Dense(1))

#Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

#Train the model
model.fit(x_train, y_train, batch_size=1, epochs=1)

#Create the testing data set
#Create a new array containing scaled values from index 1543 to 2003

test_data = scaled_data[training_data_len - 60: , :]
#Create the data sets x_test and y_test

x_test = []
y_test = dataset[training_data_len:, :]

for i in range(60, len(test_data)):
    x_test.append(test_data[i-60:i, 0])

#Convert the data to a numpy array
x_test = np.array(x_test)

#Reshape the data
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))

#Get the models predicted price values
predictions = model.predict(x_test)
predictions = scaler.inverse_transform(predictions)
#Get the root mean squared error (RMSE)
rmse = np.sqrt( np.mean(((predictions - y_test)**2)))
print(rmse)

train = data[:training_data_len]
valid = data[training_data_len:]
#valid['Predictions'] = predictions
valid.insert(1, "Predictions", predictions, True)
print(valid)


#Visualize the data
plt.figure(figsize=(16,8))

plt.title(stock_name)
plt.xlabel('Date', fontsize=18)
plt.ylabel('Close Price USD ($)', fontsize=18)
plt.plot(train['Close'])
plt.plot(valid[['Close', 'Predictions']])
plt.legend(['Train', 'True Value', 'Predictions'], loc='lower right')
plt.show()


plt.savefig("predictions.png")


#Get quote
quote = web.DataReader(stock_name, data_source='yahoo', start=start_string, end=today_string)

#Create new dataframe
new_df = quote.filter(['Close'])
#Get the last 60 day closing price values and convert the dataframe to an array
last_60_days = new_df[-60:].values
#Scale thee data to be values between 0 and 1
last_60_days_scaled = scaler.transform(last_60_days)
#Create an empty list
x_test = []
#append the past 60 days
x_test.append(last_60_days_scaled)
#Convert the X_test data set to numpyarray
x_test = np.array(x_test)
#Reshape the data
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))
#Get the predicted scaled price
pred_price = model.predict(x_test)
#undo the sclaing
pred_price = scaler.inverse_transform(pred_price)


print(pred_price)

total_correct = 0
for i in range(1,len(valid['Predictions'])):
    close_difference = valid['Close'][i]-valid['Close'][i-1]
    prediction_difference = valid['Predictions'][i]-valid['Predictions'][i-1]

    if (close_difference < 0 and prediction_difference <0) or (close_difference > 0 and prediction_difference > 0):
            total_correct += 1

percent_correct = total_correct / len(valid['Predictions'])
print(percent_correct, total_correct)