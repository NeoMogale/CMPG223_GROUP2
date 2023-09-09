import { auth, db, doc, updateDoc,
    addDoc, collection,query, where, onSnapshot, getDocs, orderBy 
   } from '../firebase/configs'
import store from '../redux/store'
import { updateAllHistory } from '../redux/slices/historySlice'

const fetchTransHistory = async (userId)=>{
 
    try {
        
        const problemsQuery = query(collection(db, "transaction history"),where('creatorId','==',userId))
        
        const unsubscribe = onSnapshot(problemsQuery, async(querySnapshot) => {
        
        const history = [];
        querySnapshot.forEach(async(doc) => {
            history.push({...doc.data(),...{id:doc.id}})
            });
            
        store.dispatch(updateAllHistory(history)) 
    });
    } catch (error) {
        alert(error.message)
    }
}

export default fetchTransHistory