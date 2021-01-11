import { useRouter } from 'next/router';
import useSWR from 'swr';
import Layout from '../components/MyLayout';

export default function Index() {
    function fetcher(url) {
      return fetch(url).then(r => r.json());
    }

    const { query } = useRouter();
    const { data, error } = useSWR('/api/tarot', fetcher);
  
    const name = data?.name;
    let number = data?.number;
    let fortune = data?.fortune_telling;
    let keywords = data?.keywords;
    let light = data?.meanings.light;
    let shadow = data?.meanings.shadow;
    let image = data?.img;
    let questions = data?.questions
    if (!data) number = 'Loading...';
    if (error) number = 'Failed to fetch a card.';
  
    let fortuneList = []
    for (var x in fortune) {
      fortuneList.push(<p key={x}>{fortune[x]}</p>)
    }
  
    let keywordList = []
    for (var y in keywords) {
      let mid = keywords[y]
      mid = mid[0].toUpperCase()+ mid.substring(1)
      keywordList.push(<li key={y}>{mid}</li>)
    } 
  
    let lightList = []
    for (var l in light) {
      lightList.push(<li key={l}>{light[l]}</li>)
    }
  
    let shadowList = []
    for (var d in shadow) {
      shadowList.push(<li key={d}>{shadow[d]}</li>)
    }
  
    let questionList = []
    for (var q in questions) {
      questionList.push(<li key={q}>{questions[q]}</li>)
    }

  return(
    <Layout>
      <div className="container">
        <main className="">
          <br />
          <h3 style={{textAlign:"center"}}>Ask a question outloud and press the button below to generate one card to answer the question.</h3>
          <h5 style={{textAlign:"center"}}>An interpretation of the meaning of the card will appear below it.</h5>
          <button style={{display: "flex", margin:"auto", alignItems:"center", justifyContent:"center"}}className="button">Show Card</button>
          <br/>
          <div style={{display: 'block'}}>
            <img style={{display: "flex", margin:"auto", alignItems:"center", justifyContent:"center"}} src={image} />
            <div style={{textAlign:"center"}}><h1>{number}</h1></div>
            <div style={{textAlign:"center"}}><h2>{name}</h2></div>
            <div style={{textAlign:"center"}}><h4>{fortuneList}</h4></div>
            <div><b>Questions to ask:</b><ul>{questionList}</ul></div>
            <div className="row">
              <div className="column"><span style={{textAlign:"center"}}><b>Light Meanings:</b></span><ul>{lightList}</ul></div>
              <div className="column"><b>Dark Meanings:</b><ul>{shadowList}</ul></div>
              <div className="column"><b>Keywords:</b><ul>{keywordList}</ul></div>
            </div>
          </div>
          

        </main>
      </div>
    </Layout>
  )
}

