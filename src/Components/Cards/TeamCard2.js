import './TeamCard.css';

const TeamCard2 = () => {
    return(
        <div className="card-style">
            <div>
                <div className="content">
                    <p style={{color: '#6b54b6', marginTop: '25px', fontSize: '.8vw'}}>STARCRAFT 2</p>
                </div>
                <div className="content">
                    <img style={{height: '10vw', marginBottom: '20px'}} alt='team-logo' src='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/team-img-4.png'/>
                </div>
                <div className="links">
                    <p style={{color: '#fff', fontSize: '1vw'}}>THE WOOBAS</p>
                    <div style={{display: 'flex', flexDirection:'row', marginTop: '14px', width: '60%', justifyContent: 'center' }}>
                        <svg className="dib h2 w2 svg-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                        <svg className="dib h2 w2 svg-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16"><path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/><path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/></svg>
                        <svg className="dib w2 h2 svg-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard2;