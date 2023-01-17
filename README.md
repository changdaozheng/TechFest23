# NTU TechFest 2023 - SingCast

## The Team

| Members                                             | 
| --------------------------------------------------- | 
| [Wong Yu Fei](https://github.com/Ranchu2000)        | 
| [Marc Chern Di Yong](https://github.com/Trigon25)   | 
| [Lim Sui Kiat](https://github.com/sktlim)           |
| [Chang Dao Zheng](https://github.com/changdaozheng) |

## Inspiration
In our Agile world today, Bootstrap templates and similar libraries have become commonplace among analytical platforms and dashboards across industries. While this results in increased efficiency and fast development times, it stifles the creative expressionism of software engineering. As such, our group was therefore motivated to design and curate our own UI/UX experience to give a refreshing experience to users while not compromising on intuitiveness and ease of navigability of the platform.

This web platform seeks to address the first problem statement for a dashboard that is multi-functional and displays accurate data in a format that is easy to understand and intuitive to use.

We took on the perspectives of various Singtel stakeholders from logistical support staff, ground staff and campaign managers and identified functionalities for the web platform that will aid in their day-to-day operations.

## What it does
Our Dashboard provides easy visualisation of information pertaining to stores at an instance. Further details can be obtained by applying various filters. The information provided is further aided by our trained machine learning model which forecasts mobile phone demand on various factors, allowing Singtel's logistical support staff to plan ahead and ensure sufficient and adequate supplies are maintained all year round.

Our Campaigns page allows for the planned campaigns to be easily visualised at a go by campaign managers as well as the functionality to add campaigns from the platform.

## How we built it
We adopted a Firebase-Express-React-Node.js for the web platform.
We utilised additional libraries to enable us to incorporate custom designs onto the front end.
The backend fetches inputs into the deployed Random Forest Regressor Model and outputs away, to be presented to users on the application. To ensure the accuracy of our model, we placed emphasis on processing and visualising various inputs to identify relevant factors affecting demands.

Assumptions taken for the forecasting model:
- When campaigns for the same make overlaps. The higher-discounted offer is taken into consideration. Insufficient data was provided to perform training based on the day and instead by week.
- The demand of the phone is entirely dependent on external factors such as release date and promotions rather than the phone's internal features.
- The release of the subsequent Galaxy S24 phone is not given and as it was required to generate the unseen predictions, we assumed it will be released in February of 2024, following the trend observed.

## Challenges we ran into
Limited Dataset: The limited dataset provided restricted us from many conventional machine learning models and hence we were restricted to less data-intensive models such as Multi-linear, Polynomial and Random Forests.
Accuracy of Model: Many of our models could not attain satisfactory results and we had to try out various models and eventually settled on the Random Forest Regressor. To improve the accuracy of the model, we adopted automated hyperparameter tuning methods such as Random Search Cross Validation and Grid Search Cross Validations.

## Accomplishments that we're proud of
Create a working and intuitive dashboard.

## What we learned
Issue resolution was a key aspect that we picked up. Over the last 24 hours, many, many issues popped up and our team was fortunately able to resolve these issues through effective communication.

## What's next for SYDM
The Random Forest Regressor model can be improved by incorporating additional factors that could correlate with mobile phone demand to enhance the effectiveness of the model. Some factors include scrapping the website for articles to identify portions that mention a mobile phone model and performing sentiment analysis to identify the public's receptivity towards that model and the subsequent effects it has on demand.
