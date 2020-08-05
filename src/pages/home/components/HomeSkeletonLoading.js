import React from 'react';
import './Card.css';
import Skeleton from 'react-loading-skeleton';

const HomeSkeletonLoading = () => {
  return (
  <React.Fragment>  
    <div className="card_area">
      
      <div className="wrap_image_skeleton">
        <Skeleton circle width={170} height={170} duration={0.5} />
      </div>
      
      <div className="card_text card_title">
        <Skeleton width={200} height={21} duration={0.5} />
      </div>
      <div className="card_text card_title">
        <Skeleton width={120} height={14} duration={0.5} />
      </div>
    </div>
    <div className="card_area">
      
      <div className="wrap_image_skeleton">
        <Skeleton circle width={170} height={170} duration={0.5} />
      </div>
      
      <div className="card_text card_title">
        <Skeleton width={200} height={21} duration={0.5} />
      </div>
      <div className="card_text card_title">
        <Skeleton width={120} height={14} duration={0.5} />
      </div>
    </div>
    <div className="card_area">
      
      <div className="wrap_image_skeleton">
        <Skeleton circle width={170} height={170} duration={0.5} />
      </div>
      
      <div className="card_text card_title">
        <Skeleton width={200} height={21} duration={0.5} />
      </div>
      <div className="card_text card_title">
        <Skeleton width={120} height={14} duration={0.5} />
      </div>
    </div>
  </React.Fragment>  
  )
}

export default HomeSkeletonLoading;