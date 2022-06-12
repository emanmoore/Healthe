import React from "react";
import Card from "./Card";
import "./Fruit.css";

const Fruit = () => {
  const fruits = [
    { name: "Grape", calories: "", image: "https://tse3.mm.bing.net/th?id=OIP.Sv7M8xxtdeVKPp9eXvTrIwHaEU&pid=Api", link: "" },
    { name: "Bannana", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.8gEjdkKZ-UWivSetpt_1MAHaJ4&pid=Api", link: "google.com" },
    { name: "Orange", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.vtH4FvolXUYYwN0lkHD-TgAAAA&pid=Api", link: "google.com" }, 
    { name: "Kiwi", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.5BKQsQonTQ2T1fHDJFBUygAAAA&pid=Api", link: "google.com" },
    { name: "Apple", calories: "", image:  "https://tse3.mm.bing.net/th?id=OIP.zhp9_YgbMuFNkG6tPN2vwgAAAA&pid=Api", link: "google.com" },
    { name: "Cantaloupe", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.3ryjGy286DXngGUveJlZPwHaGK&pid=Api", link: "google.com" },
    { name: "Watermelon", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.RlS5wVnLT8HyEQdvQWwJ-AHaGw&pid=Api", link: "google.com" },
    { name: "Strawberry", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.oZB42F64Mt6G9GocwStlwwAAAA&pid=Api", link: "google.com" },
    { name: "Peache", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.RiHXn5V0ZqXN7s0X3J2LWAAAAA&pid=Api", link: "google.com" },
    { name: "Honey Dew", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.XGZp6kBBlIzddlHIlgak2gAAAA&pid=Api", link: "google.com" },
    { name: "Pear", calories: "", image: "https://tse1.mm.bing.net/th?id=OIP.T5uYYpYbWCzyc4t66TA8kgAAAA&pid=Api", link: "google.com" },
    { name: "Pine Apple", calories: "", image: "https://tse4.mm.bing.net/th?id=OIP.Hk4szJRXCQ99ooXn8ATsBAAAAA&pid=Api", link: "google.com" },
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
    //{ name: "mango", calories: "lorem3", image: "", link: "google.com" },
  ];

  return (
    <div className="container">
      <div>
        <h1 className="Fruitpage">Favorite Fruits </h1>
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
                <a href="{fruit.link}"></a>
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruit;
