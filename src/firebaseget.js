import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import db from './firebase';

const q = query(collection(db, 'todos'), orderBy('timestamp','desc'));

const querySnapshot = await getDocs(q);
export default querySnapshot;
