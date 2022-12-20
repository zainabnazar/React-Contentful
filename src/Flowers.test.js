import FlowerCard from './flowerCard';
import { render, screen, act } from '@testing-library/react';
import App from './App';

const flower = {
    name: "Rose",
    photo: {
        file: {
            url: "//images.ctfassets.net/3wji5gq8efei/S5FArRkB3bM59OBGyUM53/d61e6bd0754ea5b8f894ae94bdf3d73d/orchid"
        }
    }
}

describe("Flowers", () => {
    it("Fetch the data from contentful to flowers page", async () => {
        await act(async () => render(<FlowerCard flower={flower} />));
        expect(screen.getByText('Rose')).toBeInTheDocument();
    });
});
