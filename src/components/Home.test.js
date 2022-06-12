import {screen} from '@testing-library/dom'
import { render } from "@testing-library/react";
import Home from "./Home";


   describe("Home Component", () => {
    it("should render home component on page", () => {
        const {getByTestId} = render(<Home />);
       expect(Home).toBeTruthy();

    })

       it(" should render div on the page", () => {
        render(<Home />);
           const formHeader  = screen.getByText("Login");
           expect(formHeader).toBeTruthy();

         
    })
    it("should not render div", () => {}); 




    })


