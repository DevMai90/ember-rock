import Component from '@glimmer/component';

export default class StarRatingComponent extends Component {
  get maxRating() {
    return this.args.maxRating ?? 5;
  }
  
  // getters are autotracked. Will automatically update when this.args.rating is changed.
  get stars() {
    let stars = [];

    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({
        rating: i,
        full: i <= this.args.rating
      })
    }

    return stars;
  }
}
