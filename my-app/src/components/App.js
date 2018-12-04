import React from 'react';
import ArticlesList from './ArticlesList';
import articles_text from '../text';
import 'bootstrap/dist/css/bootstrap.css';

function App(props){
    const nameApp = props.nameApp;
    return(
        <div className="container">
           
            <div className="jumbotron">
                <h1 className = "display-3">{nameApp}</h1>
                </div>
                <ArticlesList articles={articles_text}  />
            
        </div>
    )
};

export default App;