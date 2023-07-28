import styles from "./Description.module.css";
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.godairyfree.org/recipes/old-fashioned-dairy-free-blueberry-muffins";
    let authorPhoto = "https://secure.gravatar.com/avatar/9b466a3df08b1ca816bcd06ae8a78f51?s=190&d=mm&r=g";
    let authorName = "Alisa Fleming";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Alisa Fleming sitting and smiling" class={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>godairyfree.org</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
            <div>
               <h1>Old-Fashioned Dairy-Free Blueberry Muffins</h1>
               <p>This recipe was shared with us by Wild Blueberries. Visit <a href="www.wildblueberries.com">www.wildblueberries.com</a> for more delicious goodies, but keep in mind that not all of their recipes are dairy-free.</p>
            </div>
            <RecipeAuthor />
         </div> 
        );
    }
}

export default RecipeDescription;