// const {renderer} =require("react-test-renderer")
// const sum = (a, b) => a + b;

// test("has initial state of (a) un-activated (b) not-introduced", () => {
//   console.log("here", viz_rapper);
//   expect(sum(1, 2)).toBe(3);
// });

// import chai from "chai";
// import chaiEnzyme from "chai-enzyme";
// chai.use(chaiEnzyme()); // Note the invocation at the end


import React from "react";
// import { mount, render, shallow } from "enzyme";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
const VizRapper = require("../");

afterEach(cleanup)
console.log(VizRapper)

const scrollActive = false,
  onInitialize = () => {},
  onIntroduction = () => {},
  dimensions = () => {};

  test('Fetch makes an API call and displays the greeting when load-greeting is clicked', () => {
    // Arrange
    // axiosMock.get.mockResolvedValueOnce({data: {greeting: 'hello there'}})
    // const url = '/greeting'
    const {container} = render(<VizRapper />)
  
    console.log(container)
    // Act
    // fireEvent.click(getByText(/load greeting/i))
  
    // Let's wait until our mocked `get` request promise resolves and
    // the component calls setState and re-renders.
    // getByTestId throws an error if it cannot find an element with the given ID
    // and waitForElement will wait until the callback doesn't throw an error
    // const greetingTextNode = await waitForElement(() =>
    //   getByTestId('greeting-text'),
    // )
  
    // Assert
    // expect(axiosMock.get).toHaveBeenCalledTimes(1)
    // expect(axiosMock.get).toHaveBeenCalledWith(url)
    // expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
    // expect(getByTestId('ok-button')).toHaveAttribute('disabled')
    // snapshots work great with regular DOM nodes!
    // expect(container.firstChild).toMatchSnapshot()
    // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
    // expect(asFragment()).toMatchSnapshot()
  })
  