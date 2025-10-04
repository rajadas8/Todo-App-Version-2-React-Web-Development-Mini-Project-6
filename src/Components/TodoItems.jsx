// Raja Ram Hemsworth => TodoItems React(XML) Code
import Item from "./Item";
import styles from "./TodoItems.module.css";
function TodoItems({todoItems}){
    return (<>
        <div className={styles.itemsContainer}>
            {todoItems.map(item => 
                <Item itemName={item.name} itemDate={item.date}></Item>)}
        </div>
    </>);
}
export default TodoItems;