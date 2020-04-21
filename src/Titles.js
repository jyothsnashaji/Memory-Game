import React from 'react';


var images=[
    'https://vignette.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045',
    'https://i.pinimg.com/236x/09/66/a3/0966a317bce192cae504b07f3ac3ca86--frozen-elsa-dress-elsa-from-frozen.jpg',
    'https://i.pinimg.com/236x/92/ab/75/92ab75acb818c5621a021acd153839ed--classic-cartoons-vintage-cartoons.jpg',
    'https://i.pinimg.com/236x/aa/ce/42/aace42b8611c1931add59fdc444f940d.jpg',
    'https://cached.offlinehbpl.hbpl.co.uk/news/OMC/richedit/bean.jpg',
    'https://i.pinimg.com/236x/16/63/91/166391c7eb1fb456ab655d61a885bae5--tom-and-jerry-cartoon-tom-jerry.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png',

]
export class Titles extends React.Component{

    constructor(props)
    {
        super(props);
        this.updateScore=this.updateScore.bind(this);
    }
    shuffle(){
        images=images.reverse();
    }
    updateScore(e){
        var val=e.target.alt;
        this.props.onClick(val);
        //shuffle();
    }

    render(){
        const cards=images.map((src,index)=><li class='images' ><img src={src} alt={index} onClick={this.updateScore}/></li>);
    return (<ul type='none'>{cards}</ul>);
    }
}