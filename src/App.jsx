import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          <Post 
            author='Fábio Dantas'
            content='I have a degree in Systems Analysis and Development and I have been working for 6 years as a Business IT Support Analyst at Correios.'
          />

          <Post
            author='Gabriel Dantas'
            content='New post for test'
          />
        </main>
      </div>

    </div>
  );
}