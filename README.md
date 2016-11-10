# Visualization Project 2
Text and Geospatial visualization


## Data Processing
In this project, students will work on the texts extracted from news/blogs and classified into 4 categories: people names, locations, organizations, and miscellaneous. Each entry also contains the published time/date of the article/blog.
Students are provided 2 datasets: The Wikinews data (roughly 3.3M) contains 11,267 articles and the Huffington Post data (roughly 29.4M) contains 75,293 political blogs. Students are required to demonstrate their web applications on both datasets.

### Technique
We use javascript for the parsing our data. For each part of our project we have special object for that.
1. Top 50 frequency
  1. One object for each categories for restoring 50 top frequent and corresponding occurance
  2. One object for each month and restoring the terms and corresponding frequency of these terms in that date
2. Top 50 relationship
  1. one object for restoring the blogs that each terms happens
  2. one object for relationship between different pairs of relationship
3. Location mapping
  1. check the longitute and lantitude of top 50 locations and restore in specific objects

## Wordle

## Timeseries

## Relationship



## Map



### First meeting - October 19
#### Check the problem definition
For each of bullet we check our understanding and check to each other
We had some question related to relationship between terms that figured out is the one blog (one row in the data)
- The problem is that how should we work with wordle and tagcrowd? What is the input and output?
If we just put the one column it shows the 50 top for that column but if we have two column it is not 50 top for each of them.
- How can we figure out the relationship of different columns?
   * Answer:


### Second meeting - October 24
#### Frequency of the data for each colum
We decided to do 50 top frequency of each category data until Wednesday.
As this time, we figured out heap is the best one to restore the data because of time complexity but it can be change if we find better one.
##### Action List
- [X] Sonia is working on "Person" and "Miscellanous"
- [X] Brindivani is working on "Location"
- [X] Arun is working on "Organization"

We have a plan to finish our data processing until the end of this week (24th-28th) October


- Note: Arun mentioned that for relationship we can use index for all data in the same line (such as line number that we have variable to increment and assign to whole data in that line)


### Third meeting - October 27
#### Find some samples related to bubble-chart
We decided to work on sample codes that we found.
##### Action List
- [X] Sonia is working on relationship, cleaning data, and also some relationship implementation
- [ ] Brindivani is working on relationship code and find some sample code for this
- [X] Arun is working on bubble chart with our data

the next meeting is Monday at 11am

### Fourth meeting - October 31
#### Timeseries data
We talk about our visualization on relationships and also how should present the time-series.
##### Action List
- [X] Sonia is working on relationship, adding agenda, when click what should appears.
- [ ] Brindivani is working on montly term frequency
- [X] Arun is working on time series and frequency

### Fifth meeting - November 2
#### To do list
- [X] Displaying Legend for relationship.
- [ ] Implementing time series.
- [X] Implementing the opacity for the words with same frequency.
- [X] Data set for Huffington.

### Sixth meeting - November 4
#### Discussion
- [ ] We worked on the time slider and frequent words
- [ ] We also work on the relationship for the dynamic data

### Seventh meeting - November 7
#### Discussion
- We change our way to the implementation of frequent words
- [X] We try to implement the relationship, timeseries, and map for Huffington
- [X] Implemenation of map for the location has been done for the wikinews.

### Eight meeting - November 8
#### Discussion
- [ ] We were working on the wordle cloud and timeseries
- [X] We finish the same template for all parts of the project

### Ninth meeting - November 9
#### Discussion
- [ ] Changing the wordle
- [ ] Changing the legend of the map
- [ ] Try to implement the slider for the relationship

## Initial Visualization
### Map - wikinews
![wmap](https://cloud.githubusercontent.com/assets/19417775/20157705/0619dd00-a69c-11e6-8d94-137d25c1ea45.png)
### Map - huffington
![hmap](https://cloud.githubusercontent.com/assets/19417775/20157704/0619115e-a69c-11e6-8c7d-dbd3536649e8.png)
### Relationship - wikinews
![wrel](https://cloud.githubusercontent.com/assets/19417775/20157706/061a580c-a69c-11e6-9387-248398645c7e.png)
### Relationship - huffington
![hrelation](https://cloud.githubusercontent.com/assets/19417775/20157703/060aca0e-a69c-11e6-9647-be5094665be9.png)

