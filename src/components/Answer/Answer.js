import React from "react";
import './Answer.css'

const Answer = () => {
  return (
    <div className = "answer">
      <h2>How to React works?</h2>
      <p>
        React is a JavaScript library (not a framework) that creates user
        interfaces (UIs) in a predictable and efficient way using declarative
        code. You can use it to help build single page applications and mobile
        apps, or to build complex apps if you utilise it with other libraries.
        Alongside Angular, and more recently Vue, React is a critical tool that
        has had a big impact on the way we build web applications. While
        building client-side apps, a team of Facebook developers realized that
        the DOM is slow.So, to make it faster, React implements a virtual DOM
        that is basically a DOM tree representation in JavaScript. So when it
        needs to read or write to the DOM, it will use the virtual
        representation of it. Then the virtual DOM will try to find the most
        efficient way to update the browser’s DOM.Unlike browser DOM elements,
        React elements are plain objects and are cheap to create. React DOM
        takes care of updating the DOM to match the React elements. The reason
        for this is that JavaScript is very fast and it’s worth keeping a DOM
        tree in it to speed up its manipulation. Although React was conceived to
        be used in the browser, because of its design it can also be used in the
        server with Node.js.
      </p>
      <h2>Differences between props and state</h2>
      <table>
        <tr>
          <th>Proos</th>
          <th>State</th>
        </tr>
        <tr>
          <td>Props are read-only.</td>
          <td>State changes can be asynchronous.</td>
        </tr>
        <tr>
          <td>Props are Immutable.</td>
          <td>State is mutable.</td>
        </tr>
        <tr>
          <td>Props can be accessed by the child components.</td>
          <td>State connot be accessed by the child components.</td>
        </tr>
        <tr>
          <td>Props are used to communicate between components</td>
          <td>State can be used for rendering dynamic changes with the component.</td>
        </tr>
        <tr>
          <td>Props make components reusable.</td>
          <td>State cannot make components reusable.</td>
        </tr>
        <tr>
          <td>Stateless component can have props.</td>
          <td>Stateless components cannot have State .</td>
        </tr>
      </table>
    </div>
  );
};

export default Answer;
