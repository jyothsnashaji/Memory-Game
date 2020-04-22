import React from "react";

export const sources = [
  "https://vignette.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045",
  "https://i.pinimg.com/236x/09/66/a3/0966a317bce192cae504b07f3ac3ca86--frozen-elsa-dress-elsa-from-frozen.jpg",
  "https://i.pinimg.com/236x/92/ab/75/92ab75acb818c5621a021acd153839ed--classic-cartoons-vintage-cartoons.jpg",
  "https://i.pinimg.com/236x/aa/ce/42/aace42b8611c1931add59fdc444f940d.jpg",
  "https://cached.offlinehbpl.hbpl.co.uk/news/OMC/richedit/bean.jpg",
  "https://i.pinimg.com/236x/16/63/91/166391c7eb1fb456ab655d61a885bae5--tom-and-jerry-cartoon-tom-jerry.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png",
];
let images;
let num_of_images_per_row = 5;
export class Titles extends React.Component {
  constructor(props) {
    super(props);
    this.updateScore = this.updateScore.bind(this);
    this.shuffle();
  }

  shuffle() {
    images = [];
    var j = 0;
    while (j < sources.length) {
      images = images.concat([j++]);
      images.splice(
        Math.floor(Math.random() * (images.length - 1)),
        0,
        Math.floor(Math.random() * sources.length)
      );
      //  images=  [...Array(15)].map(() => Math.floor(Math.random() * (sources.length)))
    }

    if (images.length % num_of_images_per_row) {
      images = images.concat(
        [
          ...Array(
            num_of_images_per_row - (images.length % num_of_images_per_row)
          ),
        ].map(() => Math.floor(Math.random() * sources.length))
      );
    }
  }
  updateScore(e) {
    var val = e.target.alt;
    this.props.onClick(val);
    this.shuffle();
  }

  render() {
    const cards = images.map((index) => (
      <li class="images">
        <img src={sources[index]} alt={index} onClick={this.updateScore} />
      </li>
    ));
    return <ul className="titles" type="none">{cards}</ul>;
  }
}
