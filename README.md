# Visualization Project 2
Text and Geospatial visualization
<img width="1280" alt="screen shot 2016-11-10 at 10 05 31 pm" src="https://cloud.githubusercontent.com/assets/19417775/20204041/d6546134-a791-11e6-92a8-0448174716c8.png">


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
  2. one object for relationship between different pairs of terms
3. Location mapping
  1. check the longitute and lantitude of top 50 locations and restore in specific objects

## Wordle - Arun
We have implemented wordle to display Top frequency words from the dataset. We have implemented wordle for four different  categories to display its top frequency and one wordle to display combination of top frequency words from these four categories.

Wordle to display top frequency words from  all four category.
![w1](https://cloud.githubusercontent.com/assets/19417775/20223287/994b088e-a7fe-11e6-9ce1-0f9cc6397d58.png)

Wordle to display top frequency words from  Person category.
![w2](https://cloud.githubusercontent.com/assets/19417775/20223289/995cb6ba-a7fe-11e6-8048-15e69301d475.png)

Wordle to display top frequency words from  organization category.
![w3](https://cloud.githubusercontent.com/assets/19417775/20223290/995da67e-a7fe-11e6-932c-c2127ccaf0d0.png)


Wordle to display top frequency words from  location category.
![w4](https://cloud.githubusercontent.com/assets/19417775/20223293/995f920e-a7fe-11e6-9de6-519619f9a648.png)

Wordle to display top frequency words from  miscellaneous category.
![w5](https://cloud.githubusercontent.com/assets/19417775/20223292/995f52f8-a7fe-11e6-9be5-357a9c591975.png)

Mouse over on a word  to know its frequency in the specific time frame.
![w6](https://cloud.githubusercontent.com/assets/19417775/20223291/995f3c14-a7fe-11e6-8388-3f385882aba5.png)

Select the slider to know zoom into time interval
![w7](https://cloud.githubusercontent.com/assets/19417775/20223288/99587eec-a7fe-11e6-8a8c-f5cf2d5f0cfe.png)


## Timeseries - Brinidivani
We have some initial work for the timeseries that let us insert the term and shows the corresponding frequency during the date from 2004 - 2015.
<img width="1280" alt="screen shot 2016-11-11 at 11 09 09 am" src="https://cloud.githubusercontent.com/assets/19417775/20223455/60ad64f8-a7ff-11e6-8b76-ee834ab98216.png">
<img width="1280" alt="screen shot 2016-11-11 at 11 09 22 am" src="https://cloud.githubusercontent.com/assets/19417775/20223456/60b0902e-a7ff-11e6-8471-ed2974a8abf5.png">

## Relationship - Sonia
For two data set that we have (wikinews and huffington), we implemented two different chart for each of them that can be see as a following
Wikinews:
### Overal picture
It show dynamically the relationship between two different terms.
#### Wikinews
<img width="1280" alt="wb" src="https://cloud.githubusercontent.com/assets/19417775/20195104/c63c2c82-a75a-11e6-8edb-d75835baacc4.png">
#### Huffington
note: huffington is not dynamic.
<img width="1280" alt="screen shot 2016-11-10 at 10 06 37 pm" src="https://cloud.githubusercontent.com/assets/19417775/20204071/fcae036c-a791-11e6-9219-19420b8a724c.png">

### Mouseover-Mouseout
Whenever you mouse over on each term it shows the relationship between that to others
<img width="1280" alt="mouseover" src="https://cloud.githubusercontent.com/assets/19417775/20195106/c63ed342-a75a-11e6-9072-fb713d19a4d8.png">
When you mouseout you reset the relationship.

### Search
You can search whatever you want and it shows the suggestion for your search
<img width="1280" alt="search-2" src="https://cloud.githubusercontent.com/assets/19417775/20195103/c63ac112-a75a-11e6-9495-a8da44e0e6f0.png">
With click on search button it show the term and its relationship
<img width="1280" alt="searchr" src="https://cloud.githubusercontent.com/assets/19417775/20195105/c63de798-a75a-11e6-86a9-8693f8da7570.png">
With click on the reset button you reset your search box and also the arc diagram.

## Map - Sonia
For each of the dataset that we have we map top 50 locations to the world map. This mapping is dynamically for both data set.
Different size of circle and also different color shows how many times terms apears in that location and also that location appears itself.
### Wikinews
<img width="1280" alt="screen shot 2016-11-10 at 10 10 34 pm" src="https://cloud.githubusercontent.com/assets/19417775/20204118/8e0b652a-a792-11e6-9336-b8d75931aa17.png">

### Huffington
<img width="1280" alt="screen shot 2016-11-10 at 10 10 27 pm" src="https://cloud.githubusercontent.com/assets/19417775/20204119/8e21ad30-a792-11e6-8fed-692985f8e80c.png">

## Group schedule
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
- [X] Brindivani is working on montly term frequency
- She tried to do it but because of she doesn't have enough experiece she did as a initial template
- [X] Arun is working on time series and frequency

### Fifth meeting - November 2
#### To do list
- [X] Displaying Legend for relationship.
- [ ] Implementing time series.
- [X] Implementing the opacity for the words with same frequency.
- [X] Data set for Huffington.

### Sixth meeting - November 4
#### Discussion
- [X] We worked on the time slider and frequent words
- [X] We also work on the relationship for the dynamic data

### Seventh meeting - November 7
#### Discussion
- We change our way to the implementation of frequent words
- [X] We try to implement the relationship, timeseries, and map for Huffington
- [X] Implemenation of map for the location has been done for the wikinews.

### Eight meeting - November 8
#### Discussion
- [X] We were working on the wordle cloud and timeseries
- Unfortunately, we didn't have enought time to finish this part.
- [X] We finish the same template for all parts of the project

### Ninth meeting - November 9
#### Discussion
- [X] Changing the wordle
- [X] Changing the legend of the map
- [ ] Try to implement the slider for the relationship
- Unfortunatley we didn't have enought time to change it.

## Initial Visualization
### Map - wikinews
![wmap](https://cloud.githubusercontent.com/assets/19417775/20157705/0619dd00-a69c-11e6-8d94-137d25c1ea45.png)
### Map - huffington
![hmap](https://cloud.githubusercontent.com/assets/19417775/20157704/0619115e-a69c-11e6-8c7d-dbd3536649e8.png)
### Relationship - wikinews
![wrel](https://cloud.githubusercontent.com/assets/19417775/20157706/061a580c-a69c-11e6-9387-248398645c7e.png)
### Relationship - huffington
![hrelation](https://cloud.githubusercontent.com/assets/19417775/20157703/060aca0e-a69c-11e6-9647-be5094665be9.png)

