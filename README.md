https://palmabuild.netlify.app/

# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot
![personalInfo page](C:\Users\HP\Documents\Template\palma\src\assets\personalInfo.jpg)
![plans page](C:\Users\HP\Documents\Template\palma\src\assets\plan.jpg)
![addOns page](C:\Users\HP\Documents\Template\palma\src\assets\addOns.jpg)
![summary page](C:\Users\HP\Documents\Template\palma\src\assets\summary.jpg)
![thankYou page](C:\Users\HP\Documents\Template\palma\src\assets\thnkYou.jpg)

### Links

- Solution URL: [https://palmabuild.netlify.app/]
- Live Site URL: [https://palmabuild.netlify.app/]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCss](https://tailwindcss.com/) - For styles
- [Redux and ReduxToolkit ](https://redux.js.org/redux-toolkit/) - For state management

### What I learned

```css
-During the course of building this project, I got a better understanding of mobile responsiveness using raw css. 
I was able to decide the layout orientation for devices between 600px and 1024px and to ensure the project renders seamlessly on different devices.
-Using tailwindCss I achieved a better understanding of the css library, defining my styles and device width breakpoints for different devices while ensuring maximum functionality

```js
Though I previously learned useContext and recently learn the use of redux state management tool, This project presented the opportunity to put to practice my knowledge of redux, using redux toolkit for state management
const proudOfThisFunc = () => {
  name: 'purchaseStep',
    initialState: {
        step: 1,
        personalInfo: ['', '', ''],
        plan: ['', '', ''], 
        addOns: ['', '', ''],
        errorMessage: '',
        errorField: ''
    },
    reducers: {
        nextStep: (state) => {
            state.step += 1
        },
        prevStep: (state) => {
            state.step -= 1
        },
        changeStep: (state, action) => {
            state.step -= action.payload
        },
        getPersonalInfo: (state, action) => {
            state.personalInfo = action.payload
        },
        getPlan: (state, action) => {
            state.plan = action.payload
        },
        getAddOns: (state, action) => {
            state.addOns = action.payload
        },
        getErrorMessage: (state, action) => {
            state.errorMessage = action.payload
        },
        getErrorField: (state, action) => {
            state.errorField = action.payload
        }
    }
}
```

### Continued development

Areas I need improvement include
--responsiveness
--use of DSA

## Author

- Website - [Ugorji Victor E](https://www.linkedin.com/in/eze-ugorji-33a9301a7/)
- Frontend Mentor - [@BlckTitan](https://www.frontendmentor.io/profile/BlckTitan)
- Twitter - [@ugorjivee](https://www.twitter.com/ugorjivee)
- GitHub - [@BlckTitan](https://github.com/BlckTitan)