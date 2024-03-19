---
title: 'Building a Web Forum with React: A Project Walkthrough'
date: '2024-02-01'
---

![Illustration](/images/react.png)

In this project, we will embark on an exciting journey to build the beginnings of a web forum! A web forum, often referred to as a discussion board, is a place where users can exchange their thoughts and ideas on various topics. The heart of any forum is the comment section, and that's precisely what we'll be working on in this project.

**Getting Started** To kick off this project, take a moment to review the files provided. The essential file to start with is commentData.js, which contains an array of comment objects with properties such as profileImg, username, and comment. This data will be used to populate the comments on our forum.

Our comment section will consist of Card components, each of which will comprise smaller Header and Body child components. The top-level component, App.js, will retrieve the data from commentData.js and pass it down to the child components. The forum's markup and styling are handled by style.css and index.html.

1. **Creating the Body Component** Let's start by working on the smallest     component, the Body. The Body component is responsible for displaying the comments that users have written. It will receive a comment property from the props, which it will render inside a <p> element.

Here's how you can access and display the comment property in the Body component:


```function Body({ comment }) {
  return (
    <p>{comment}</p>
  )
}
```

**Exporting the Components** After defining the Body component, make sure to export it so that it can be imported and used in the Card component.


```
export default Body;
```

**Setting Up the Header** Component Now, let's move on to the Header component. This component is responsible for displaying the profileImg and username properties from the comment object. The Header component should receive these properties as props and render them using an <img> element for the profile image and an <h1> element for the username.

```
function Header({ profileImg, username }) {
  return (
    <>
      <img src={profileImg} alt={username} />
      <h1>{username}</h1>
    </>
  )
}
```
As before, make sure to export the Header component for use in the Card component.

Creating the Card Component The Card component is the parent component that encapsulates both the Header and Body child components. It receives the commentObject as props, which contains the profileImg, username, and comment properties.

Here's how to set up the Card component:

```
function Card({ commentObject }) {
  const { profileImg, username, comment } = commentObject;

  return (
    <>
      <Header profileImg={profileImg} username={username} />
      <Body comment={comment}/>
    </>
  );
}
```

Don't forget to export the Card component.

Rendering the Application Finally, let's put everything together. In App.js, you will map over the comments array from commentData.js and return an instance of the Card component for each comment.

```
function App() {
  return (
    <>
      {comments.map(comment => (
        <Card commentObject={comment} />
      ))}
    </>
  )
}
```

With this setup, you should be able to render the web forum with the comments in the browser. Enjoy the lively discussion on animals!

Now, you've successfully created the structure for a web forum using React. Building such projects is a fantastic way to enhance your React skills, particularly in working with components and passing props. If you encounter any issues, you can always refer to the "Get Unstuck" resources or explore project walkthrough videos. Happy coding!
