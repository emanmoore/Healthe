import { render } from "@testing-library/react";
import Home from "./Home";


describe("Home Component", () => {
    it("should render home component on page", () => {
        const {getByTestId} = render(<Home />);
       expect(Home).toBeTruthy();

    })

       it(" render div on the page", () => {
           const div = getByTestId("");
           expect(div).toBeTruthy();

         
    })
    it("don't render div", () => {}); 




    })


