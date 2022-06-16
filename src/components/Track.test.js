//import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';


import {render,fireEvent, screen} from '@testing-library/react';
import Track from "./Track";




describe("<Track />", () =>  {
   it("should render track form with 2 buttons", async () => {
       render(<Track />);
       const buttonList = await screen.findAllByRole("button");
       expect(buttonList).toHaveLength(2);
   });

   it("It should display fruit amount on track page", async () => {
    render(<Track />)
   
    //Click button
    fireEvent.click(screen.getByText('Eat'))
    const items = screen.findByLabelText("btn btn-primary")
    expect(items).toMatchObject(items)
   
   })

   const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
   )
  
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)

  })


 



  // it("should save water consumed when drink button is pressed")
  //it("should save fruit consumed when eat button is pressed")
  //it("should display water amount on track page")
   //it("should display fruit amount on track page")
})
