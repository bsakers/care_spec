Description:
CareSpec is a dynamic dashboard for manipulating and viewing healthcare data. Visualizations include a utilization matrix, cost distribution curves, frequency of disease state, and geographic mapping of patient address.

Purpose:
Healthcare accounts for nearly 20% of our country's GDP, and hospitals throughout the nation are struggling to reduce costs while simultaneously improving quality of care. CareSpec allows an organization to find patterns within subsets of their patient population, so that they can more appropriately allocated resources to better serve them.

Ruby Version: 2.3.3

Dependencies: React, react-easy-chart, d3, babel, webpack

Configuration: After cloning, run npm install and bundle

Database: PostgreSQL

Database Creation: rake db:create, rake db:seed

Running the test suite: rake and karma start
