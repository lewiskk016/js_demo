## Background and Overview

This project is meant to provide a visual representation of foreign exchange (forex) markets, specifically the EURO-US Dollar (EUR/USD) currency pair.  Forex is crucial to functioning of modern economies and the fluctuation of currency rates are caused by a variety of factors. This project is meant to provide users with a better understanding of the forex market and how it works. Overlaying macroeconomic data on the currency pair will allow users to see how the currency pair reacts to certain events.


## Functionality & MVP

In “Forex Facade” users will be able to
-	See the EUR/USD currency pair plotted on a line graph.
-	Give user option to plot the EURO/USD currency on other forms of visual representation (bar chart and candlestick).
-	Choose different timeframes.
-	See macroeconomic data overlayed on the currency pair (GDP, CPI, employment, central bank interest rate announcements).

In addition, this project will include:
-	User customizability…
-	(Hopefully) the option for users to apply built-in indicators such as moving average and volatility oscillators.
-	(Hopefully) the ability to draw on the charts.


## Wireframes

# Implementation 1:
This app will consist of a single screen with the chart, a nav bar, and links to the Github, my LinkedIn, and the About modal. The About modal will contain a brief description of the project and a link to the Fred API.  The chart will be a line graph of the EUR/USD currency pair.  There will be a dropdown menu to select the timeframe.  There will be a dropdown menu to select the type of chart (line, bar, candlestick).  There will be a dropdown menu to select the macroeconomic data to overlay on the currency pair. There will be a dropdown menu to select the type of chart (line, bar) for the macroeconomic data.  There will be a dropdown menu to select the type of indicator to overlay on the currency pair. There will be a dropdown menu to select the type of drawing tool to use on the chart.  There will be a dropdown menu to select the type of drawing tool to use on the chart.  There will be a dropdown menu to select the type of drawing tool to use on the chart.

# Implementation 2:
If time persists, instead of a single screen on the chart, there will be a scroll option where underneath the main screen will be a calandar where users can click a month, or set a time range, and a chart will be generated for that time period.  (SAME AS ABOVE)...There will be a dropdown menu to select the type of chart (line, bar, candlestick).  There will be a dropdown menu to select the macroeconomic data to overlay on the currency pair. There will be a dropdown menu to select the type of chart (line, bar) for the macroeconomic data.  There will be a dropdown menu to select the type of indicator to overlay on the currency pair. There will be a dropdown menu to select the type of drawing tool to use on the chart.  There will be a dropdown menu to select the type of drawing tool to use on the chart.  There will be a dropdown menu to select the type of drawing tool to use on the chart.

## Technologies, Libraries, APIs

The technologies used will be:
- Fred API (federal reserve economic data)
- Chart.js
- D3
- This project may need a cors proxy to get around the Fred API’s CORS policy.  How/when to set this up will be determined later on in the project.
- This project will be deployed through Github.


## Implementation Timeline
- Friday Afternoon & Weekend:  Setup project, get familiar with the Fred API, and get familiar with Chart.js and D3.
- Monday:  Get the currency pair plotted on a line graph.  Get the currency pair plotted on a bar chart and candlestick chart.
- Tuesday:  Get the macroeconomic data overlayed on the currency pair.
- Wednesday:  Get user customizability.
- Thursday Morning:  Get the project deployed on Github.
