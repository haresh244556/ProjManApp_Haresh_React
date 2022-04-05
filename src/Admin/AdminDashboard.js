import React from 'react';
import { Header } from './Header';
import  Sidebar from './Sidebar';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  return (
    <div>
        <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                    <Header/>
                    <MainContent/>
                      
        
                  </div>  
                
                <Footer/>
            </div>
        </div>

    </div>
  )
}
