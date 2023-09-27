
# React blogPost app

A “Blog post app” using React, Redux and Context API. Application contain list of blog post. Users can add new post, view the details of the blog post and also can delete and ❤️ like the post.


#Explanation
in this project all the main files are indise the src folder where all the diffrent components are in the separate folder
- in the App.jsx i have configured all the Routes of the app and specify the path for the pages
- cards.css have all basic css styling apart from the boootstrap useing the project
- Data.jsx this file conatain the data stored in the array object in locally
- create.jsx contain the code the create a new post in the app where i have use the Redux for state managment for all the crud oparetions in the app
- context Api use in the app to store liked blog in array in the LikedBlogsContex.js file
- all the Redux operation are configure in the UserReducer.jsx file 

## Installation

Install project with npm

```bash
  npm install [ it will install required packges ]
  cd blogs
  npm start
```
    
## Deployment

To deploy this project run

```bash
  npm run build (it will create a build folder )
  npm install -g surge
  surge
```
deployed URL using Surge : [Manoj-Blogpost](http://manoj-blogpost.surge.sh/)

## Operations

- Show the list of blog post.
- View details of the blog post.
- Add a new blog post.
- Edit the blog post.
- Delete the blog post.
- Like the blog post.



## Screenshots
<img width="30px" src="/screenShots/s1.png" alt="image_name png" />

![1](./screenShots/s1.png)
![2](https://github.com/manojb-j/React-blogPost-app/blob/main/screenShots/s2.png)
![3](https://github.com/manojb-j/React-blogPost-app/blob/main/screenShots/s3.png)
![4](https://github.com/manojb-j/React-blogPost-app/blob/main/screenShots/s4.png)

