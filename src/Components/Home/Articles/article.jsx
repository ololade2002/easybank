import './article.css';
import { articleData } from '../../../Data/data';
import { MDBBtn } from 'mdb-react-ui-kit';

const Article = () => {

    return (
        <div  className="article">
             <h1 >Latest Articles</h1>
             <div className="article-card" >
            {articleData.map((article,index)=> (
                <div className="article-preview" key={index}>
                 <img src={article.img} alt="" />
                <div className="container">
                        <h5>{article.author}</h5>
                        <h3>{article.title}</h3>
                        <p>{article.text}</p>
                        <MDBBtn className='button btn1' rippleDuration={1000}  size='sm' >
                            <span>{article.btn}</span>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>  
</MDBBtn>
                        </div>
                 </div>
            ))}
           
            </div>
        </div>
      );
}
 
export default Article;