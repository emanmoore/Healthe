import React from "react";
import Card from "./Card";
import "./Fruit.css";

const Fruit = () => {
  const fruits = [
    { name: "mango", calories: "lorem3", image: "https://media.istockphoto.com/photos/mango-picture-id168370138", link: "google.com" },
    { name: "pear", calories: "lorem3", image: "https://cdn-cciif.nitrocdn.com/GPPohTYPNHYTtHqiUmAFrEQnzFJoGejr/assets/static/optimized/rev-ce7c2cb/wp-content/uploads/2016/11/avocado-hub.jpg", link: "google.com" },
    { name: "russia", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
    { name: "mango", calories: "lorem3", image: "", link: "google.com" },
  ];

  return (
    <div className="container">
      <div>
        <h1 className="Fruitpage">Fruit Tracker</h1>
        <div className="d-none">
          <p>
            Lorem ipsum dolor sit amet. Ad dolorem delectus ut reiciendis molestias qui assumenda eius. Eos quis odio aut facilis impedit
            qui dolorem accusamus et veritatis magni aut impedit praesentium est omnis sapiente. Est rerum aliquam et fugiat voluptate et
            quae voluptate. Aut facere velit ex earum dolore a voluptate laborum.{" "}
          </p>
          <p>
            Aut quos sint et doloremque possimus et repudiandae voluptas sit dolores voluptatum cum autem alias sit sunt voluptas. Ad
            voluptatem mollitia ea unde minus et inventore aspernatur et accusantium galisum. Qui officiis omnis aut voluptatem corporis ut
            veritatis consequatur non omnis sit galisum autem non explicabo laudantium quo alias vitae. Est consequatur consequatur qui
            reprehenderit saepe et corporis velit et quos placeat a voluptas sunt.{" "}
          </p>
          <p>
            Ea dolore dolorem ab voluptas fugiat sit molestias molestiae ut obcaecati autem sed mollitia saepe et aliquam atque ut
            voluptatibus dolor. Et assumenda beatae qui iure reprehenderit eos labore molestiae quo necessitatibus necessitatibus?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet. Ad dolorem delectus ut reiciendis molestias qui assumenda eius. Eos quis odio aut facilis impedit
            qui dolorem accusamus et veritatis magni aut impedit praesentium est omnis sapiente. Est rerum aliquam et fugiat voluptate et
            quae voluptate. Aut facere velit ex earum dolore a voluptate laborum.{" "}
          </p>
          <p>
            Aut quos sint et doloremque possimus et repudiandae voluptas sit dolores voluptatum cum autem alias sit sunt voluptas. Ad
            voluptatem mollitia ea unde minus et inventore aspernatur et accusantium galisum. Qui officiis omnis aut voluptatem corporis ut
            veritatis consequatur non omnis sit galisum autem non explicabo laudantium quo alias vitae. Est consequatur consequatur qui
            reprehenderit saepe et corporis velit et quos placeat a voluptas sunt.{" "}
          </p>
          <p>
            Ea dolore dolorem ab voluptas fugiat sit molestias molestiae ut obcaecati autem sed mollitia saepe et aliquam atque ut
            voluptatibus dolor. Et assumenda beatae qui iure reprehenderit eos labore molestiae quo necessitatibus necessitatibus?{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet. Ad dolorem delectus ut reiciendis molestias qui assumenda eius. Eos quis odio aut facilis impedit
            qui dolorem accusamus et veritatis magni aut impedit praesentium est omnis sapiente. Est rerum aliquam et fugiat voluptate et
            quae voluptate. Aut facere velit ex earum dolore a voluptate laborum.{" "}
          </p>
          <p>
            Aut quos sint et doloremque possimus et repudiandae voluptas sit dolores voluptatum cum autem alias sit sunt voluptas. Ad
            voluptatem mollitia ea unde minus et inventore aspernatur et accusantium galisum. Qui officiis omnis aut voluptatem corporis ut
            veritatis consequatur non omnis sit galisum autem non explicabo laudantium quo alias vitae. Est consequatur consequatur qui
            reprehenderit saepe et corporis velit et quos placeat a voluptas sunt.{" "}
          </p>
          <p>
            Ea dolore dolorem ab voluptas fugiat sit molestias molestiae ut obcaecati autem sed mollitia saepe et aliquam atque ut
            voluptatibus dolor. Et assumenda beatae qui iure reprehenderit eos labore molestiae quo necessitatibus necessitatibus?{" "}
          </p>
        </div>

        <div
          className="cards-container d-flex flex-wrap justify-content-evenly"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          {fruits.map((fruit, index) => (
            <Card className="w-25 m-3" key={index}>
              <span className="text-lg text-primary h4">
                {index + 1} {fruit.name}
              </span>
              <span className="text-lg">{fruit.calories}</span>
              <img src={fruit?.image.length ? fruit.image: "https://image.shutterstock.com/image-photo/authentic-west-african-pepper-soup-600w-556585273.jpg"} alt="" />
              <span className="text-lg">
                <a href="{fruit.link}">Read more</a>
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruit;
