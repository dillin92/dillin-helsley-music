 import { Div, H1 } from './VideosElements'
 
 const Videos = () => {
  return(
    <Div href="videos">
      <H1>Hip-Hop</H1>
      
        <h2>Lose Self Deep</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BqmT8QS6qFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>Introducing Doc D</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/04Z7edkN-ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h2>Pictures Of Dead Presidents</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/P776T9luVC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Div>
    )
}

export default Videos