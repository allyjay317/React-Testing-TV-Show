import axios from 'axios'

export const fetchShow = (show) => {
  return axios
    .get(
      `https://api.tvmaze.com/singlesearch/shows?q=${show.replace(' ', '-')}&embed=episodes`
    )
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => {
      return err
    });
};