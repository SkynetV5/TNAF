import {render, screen} from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
describe("App component", () => {
    it("should work ReactLogoLink", () =>{
        //given
        render(<App/>);
        const reactLogoLink = screen.getByRole("link", {name: "React logo"});
        //then
        expect(reactLogoLink).toHaveAttribute("href", "https://react.dev");
        expect(reactLogoLink).toHaveAttribute("target", "_blank");
        
        

        
    })
    it("should work ViteLogoLink", () => {
        //when
        render(<App/>)
        const viteLogoLink = screen.getByRole("link", {name: "Vite logo"});
        //then
        expect(viteLogoLink).toHaveAttribute("href", "https://vite.dev");
        expect(viteLogoLink).toHaveAttribute("target", "_blank");
    })
})