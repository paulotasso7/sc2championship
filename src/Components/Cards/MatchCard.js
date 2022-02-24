import './MatchCard.css';

const MatchCard = ( ) => {
    return(
        <div className='card-principal'>
            <div className='img-container'>
                <img alt='team-logo' src='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/team-img-3.png'/>
                <h1>TEAM NAME</h1>
            </div>
            <div className='video-div'>
                <h5 style={{margin: '0px 20px 5px 0px'}}> WATCH </h5>
                <svg style={{height: '15px', width:'15px', margin: '0px 20px 4px 0px', padding: '0px 0px 2px 5px'}}className="dib h2 w2 svg-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/><path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/></svg>
                <svg style={{height: '15px', width:'15px', margin: '0px 20px 4px 0px', padding: '0px 0px 2px 5px'}}className="dib w2 h2 svg-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
            </div>
        </div>

// { <div className="edgtf-pl-inner edgtf-outer-space">
// <div className="edgtf-match">
//     <div className="edgtf-match-inner">
//     <div className="edgtf-team-holder edgtf-team-1">
//         <div className="edgtf-team-logo">
//             <a itemprop="url" href="/index.php/team/shuriken/" title="Shuriken">
//             <img style={{width:"150px"}}  className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="a" loading="lazy" />				</a>
//         </div>
//         <div className="edgtf-match-bg-ribbon">
//             <div className="edgtf-match-bg-ribbon-inner">
//                 <span className="edgtf-decoration ion-ios-star-outline"></span>
//                 <div className="edgtf-team-main">
//                 <div className="edgtf-team-name-holder">
//                     <h3 itemProp="name" className="edgtf-team-name entry-title">
//                         <a itemProp="url" href={"/index.php/team/shuriken/"} title="Shuriken">
//                             Shakti				                
//                         </a>
//                     </h3>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <div className="edgtf-team-meta">
//             <span className="edgtf-stream-link">League</span>
//             <div className="edgtf-team-social-holder edgtf-team-section">
//                 <img style={{width:"25px"}}  className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="a" loading="lazy" />			
//             </div>
//         </div>
//     </div>
//     <div className="edgtf-match-board">
//         <div className="edgtf-match-score">
//             1				<span className="edgtf-match-score-separator">:</span>
//             3			
//         </div>
//         <div className="edgtf-match-date">
//             <a itemprop="url" href="/index.php/match/shuriken-vs-dragonchan/" title="Shuriken VS Dragonchan">
//             17th October 2019, 19:00				</a>
//         </div>
//     </div>
//     <div className="edgtf-team-holder edgtf-team-2">
//         <div className="edgtf-team-logo">
//             <a itemprop="url" href="/index.php/team/dragon-chan/" title="Dragon chan">
//             <img style={{width:"150px"}}  className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="a" loading="lazy" />				</a>
//         </div>
//         <div className="edgtf-match-bg-ribbon">
//             <div className="edgtf-match-bg-ribbon-inner">
//                 <span className="edgtf-decoration ion-ios-star edgtf-winner"></span>
//                 <div className="edgtf-team-main">
//                 <div className="edgtf-team-name-holder">
//                     <h3 itemprop="name" className="edgtf-team-name entry-title">
//                         <a itemprop="url" href="/index.php/team/dragon-chan/" title="Dragon chan">
//                         Eric                       </a>
//                     </h3>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <div className="edgtf-team-meta">
//             <div className="edgtf-team-social-holder edgtf-team-section">
//                 <img style={{width:"25px"}}  className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="a" loading="lazy" />			
//             </div>
//             <span className="edgtf-stream-link">League</span>
//         </div>
//     </div>
//     </div>
// </div>
// <br /><br /><br /><br /><br />
// </div>  }

    )
}

export default MatchCard;





