import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarLabels from "./SidebarLabels";
import Icons from '../data/icons';
import { dropArray1, dropArray2 } from '../data/dropArray';

export default function Sidebar({ allMails, handleDragAndDrop, dropSidebarUi }) {
  
  const getClassName = key => {
    if(dropArray1.some(k => k === key) && dropSidebarUi === 'dropArray1') return 'dropArray1'
    
    if(dropArray2.some(k => k === key) && dropSidebarUi === 'dropArray2') return 'dropArray2';
    
    return '';
  };
  const handleDragOver = e => e.preventDefault();

  const handleDrop = (e, key ) => {
    let canDrop = false;
    const item = JSON.parse(e.dataTransfer.getData('data'));
    const myPath = item.path.split('.')[0];

    if(dropArray2.some(k => k === myPath)) canDrop = dropArray2.some(k => k === key);
    else canDrop = dropArray1.some(k => k === key);

    canDrop ? handleDragAndDrop(item, key) : null;
  };
  return (
    <div className="sidebar">
      {
        Object.keys(allMails).map(key => {
          let subCategories = null;
          const category = (
            <NavLink 
              key={key} 
              to={`/${key}`}
              onDragOver={e => handleDragOver(e)}
              onDrop={e => handleDrop(e,key)}
            >
              <SidebarItem classNames={getClassName(key)}>
                <span role="img" aria-label="inbox">
                  {Icons[key]}
                </span>{" "}
                {key.toUpperCase()} ({allMails[key].category.length})
              </SidebarItem>
            </NavLink>
          );

          if(allMails[key].subCategory) {
            const subCategory = {...allMails[key].subCategory}
            subCategories = <SidebarLabels>{Object.keys(subCategory).map(subKey => {
              return (
                <NavLink
                  key={subKey} 
                  to={`/inbox/${subKey}`}
                  onDragOver={e => handleDragOver(e)}
                  onDrop={e => handleDrop(e,subKey)}
                >
                  <SidebarItem classNames={getClassName(subKey)}>{subKey.toUpperCase()} ({subCategory[subKey].category.length})</SidebarItem>
              </NavLink>
              )
            })}
            </SidebarLabels>
          }

          return [category, subCategories];
        })
      }
    </div>
  );
}
