const driveView = id => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const driveImage = id => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
const driveVideoPreview = id => `https://drive.google.com/file/d/${id}/preview`;

const photoIds = [
  '1YZiAtkPIrtTrJg39-vRhDuh-kgbU-NmV','19kQmPxrBY0NQLHY--5l12h_ZFARwYvEV','1lMoq2ayvIC27MyWRvYXMjw1JaWtDbEk4','1OXUaQ_dqGhysiUWrtt-7ERnhA61QracL','1DdiMKUnXlLIz8BEI6jk2MxvMN22WnO6z','1sLT149B3_b1YJlcVGgPG_v0d7S1ZlMpL','16ZwjEOTGEvOe-Llt00M8nNtECTjQrkqO','1dFRI7lddShJ6DQuZqQF9S8eSovrvcGrx','182h7gZJA2z9D2ZhoSli-jHMG9557puW2','12DAfRSQNLG3pfW6Wmgfd1oE1J5q3B_D8','1cjPlGpC5LipQ8cASiephKGC9Fofy1lBx','1oVZv9fjd4r9zEq1dKt4lEWHQWre6HdqO','1hMK1eB1d0wd2K8icF-DJb2Jfgb4YmFHd','1slFDAxORHmtQJ-hWSQbLI9bjKFQpafKQ'
];
const pecIds = ['1xmFxug6sS_Ky5EjK4oEDsUOOCPPD_TvC','1dSdAQ3r_wSxFYu51_bkSoXJkmBfSQBDU','1XFMOat_UhZHxZ9N8vobltdd0lgbjUi4m','1OG1_zjM3f9FXARTMjKmzaLMgjEckoAbd','1gFHT_GtRMfqGhvp8nO3N4Ym0MvjDHCnm','1-gxnC-f0ANngimyrDloPd32Ij-vGZcim','15PJ38wSk6ZacBKXiW94YaGq67sXlVsDp','1CPup8ZSDP3TWF8NXkAdopNkHet_sBzuU','1HXFqROTuYBBK0DlQZBzepTxQ_ZWkORBs','1OFfF3xLZOJlPTDXQPN-DZxrErbXoTxc8','1UowwbOECvr_-GR_FRgO_55zv5Bskifpo','1UX3kBUqqElwksy46NfMa5z59ruQ5J32x'];
const singaporeIds = ['1Qj1NQe2KQlqerHpgPjzybze7_uIJCJgK','10VkoKGKiHiyXq_BvKXlEAVBAJCnl7YKy','1DovDXueH1qpa7UczCX68PF92UjaPjYg6','1PFGQPuPE9KHg6t0mBby09U3YT8vUHVxy','1yruhUf7b_sbrprLC-NMHbc5XZ73pOKQI','1XXET0SPVUfHcRSLK3YbG5juFct35-G1e','17tECIzqzZl9h2YeH122lpKFLJkmzt9I9','1saZSF6aQXo1S0d9UT_H24uOV-F7knh3V','1S-r6cEoviH9mYHbFfqtHcXIdBx7wtBW8','1EYrseDsyKR9T7VcVK4lc2bEOBWPzzz5X','1bLA3s43QF_G_1h2mT2_zaixORQLI9_em','1ZLTGjsblBfRcyrXu2riiTFQjN9QvsFos','1L2xQa7E73sDKxFTf7eyXMLorMSOUFwZl','1FkjmWoEZMW763pTs2LHHQ7kyHsaFxAmi'];
const usIds = ['18rl1BsNhH2uLo5I7Ax5EddpAWClqvSdp','1obln9UcJpX4CGTq8u3nYl8OD8djpvBmO','1ZreXpQjDDEuVeEXsHuKfdNKjBHpfV-AK','1eu-CZb1jocXbxxwVHHBnLYEzP-qY5XRf','1L7QUAmQUMbE7uRmAVk6tSaVQ6S7CbiRA','1jlEWTB6cufCfqZNqMiUHUJiXMM5uBo3G','1doYDXKR8ElaJa_GvDfcvuAE3qZi4GimM','1Jh-71t9esulrj16w0kdD98cjQXNUBs0u','1sUCat1Qjv-Nt41S2L683gXl-S15LWpFo','1SK53bLO0QkAH5RDLdBBgHaXdkUIBZKzD','1KupMQYYL7sA1aNIrYWrx5NKwnhq6DTBs'];
const horizontalIds = ['1vtGFqPeLelgx77kyqxrtm2A9Z_Mgpzh-','15vASi8TsI3Y0ELgcf4f9uCGdytTxT4h5','122bFFYRbqzfU4OQWFdCfnMRhMOV-PWZJ','1YzyJZZHvqKbSUTzMsfW2JrrROupxQpwO','1S55S56P7_0aSaZjKYVHRLG5AG76baib0','1Ha-KOfXOO7KLHMoiQIO85qyH7ZBp08GV','1U6DERXWQdqnDJ6cY8Y81AB9zOZjlHqFM','1wHXco0pxK1SsPzbLdsM_625HgCHxl2BJ','1_9oRwaBysjIlZ9F-WNmv1sQyNFum_Rgu','18OG0pHz818LUpgKE9MVR5OXAjKlOfZF_','10mIi0WqO0PH2JBE8QPf2cHSQJHRlStXI','1G9zozHZV-KtK1oFIA3EBh-xElmrAOfro'];
const verticalIds = ['1UidD7RvlEmlw8ajO0vJRnYKBX6Zm66rG','1A0T9l8PMAQrID9I1_nkin9XaMx29kR1s','1QYBcpYc4o5zTud8LJDS4jCAWkeU4uEg6','18OG0pHz818LUpgKE9MVR5OXAjKlOfZF_','1le4yMWMihG6IW5o_Gt_UOO5PA1G8eko6','1Dnb0CMWXfv4q2O8Vo0pf7RnMSqOdPg3W','1IgE7iOM4rXNNnndTry9kA_PxHHmtqloi','1o0zr5EL9XShxtR2nAZc4R-nMmCkJDuVm','1GOXYW4LxiVkQQFkMdvXeSXfLG83K436g','1EN5wSgXZ_bDB944F8EbWbH6vz2fn032B','1FXCyl1OPuHuV3lij07xb24LHEY9eRMDh'];
const adIds = ['139Nu0zSV52j49pfg6ki0qtAEQhgWFH5R','1AeEY3UbbxXwcj_V858ke-m0NyD7hf5qj','1pF0V9VSAFzjeuXrebwAsGWpUCYk8MgBW','1_JPeYWq56kTjfnLRpQlnDFuUx7eBBVZI','1pHFLKw_284iysntA4ljwBKPmz_SD13m4','1SRLr76rXT6ItD0YYDk3ZIgiPdSnMKPY7','1v-GxdM5ldd3KXfxJ9zUgVhpL3ZcyGgfU'];
const eventVideos = [
  {id:'1yHyr6w0HCsanHzZnLaSiUYV5XVH1JFM-',title:'Live with U.S. client · 1'},
  {id:'1dPM8LlpmMMZL3kMHoVIb4Bg5t3dS-KLm',title:'Live event · U.S. client'},
  {id:'1VNwlhCXLuK8WGLOh6mbiV6TxAYc6rYU4',title:'Recruitment live event'},
  {id:'14iCn6HvxtWIHI7MtdGZCi2AYvE2q48nw',title:'Live with U.S. client'},
  {id:'1y9P3RdFzsij38dTSWQhmR4E0qI7tDW-9',title:'Live with Europe client · 1'},
  {id:'17nh__kSHh8SfHpQVjhhdviLnM0-7Tf4R',title:'Live with Europe client · 2'},
  {id:'1YMUXfWgG2LjgGZCUZTbMauaBQ0ZkH-cN',title:'Live with Europe client · 3'},
  {id:'18ftNFLAlLCxcnlUgG6fvi_ZFPJ3bsFgv',title:'Live with Europe client · 4'},
  {id:'1YJpQSpumw4UdL0jLhw068e1p_pPZxHLh',title:'Webinar with U.S. client'},
  {id:'1osfHfLOD11uYQWvf_ovHBPj5zpQSCs5p',title:'Live with U.S. client · 2'}
];
const research = [
  {type:'MBA · Financial management',title:'The Impact of Increased Minimum Net Pay on Employee Financial Literacy',description:'Final course research examining the relationship between changes in minimum net pay and the financial literacy of Provincial Government of Misamis Occidental employees.',url:'https://docs.google.com/document/d/1CYgy54cOP4l47k9HthFphhmcpWrLEGEA/edit?usp=sharing&ouid=104321114381789564015&rtpof=true&sd=true'},
  {type:'MBA · Business research',title:'Employee Motivation: A Tool for Organizational Success',description:'Explores how employee motivation can enhance workplace performance, improve productivity, and contribute to organizational success.',url:'https://docs.google.com/document/d/1cpWoRivgAF4g_cmXcrVmt8dGJP6CD9Fq/edit?usp=sharing&ouid=104321114381789564015&rtpof=true&sd=true'},
  {type:'MBA · Marketing management',title:'LANECO Marketing Plan',description:'A comprehensive strategy to strengthen market presence, promote services, and identify opportunities for growth and customer engagement.',url:'https://docs.google.com/document/d/1g4PP9j1G4XeY_28WBBbfeIKZWhODcmqZ/edit?usp=sharing&ouid=104321114381789564015&rtpof=true&sd=true'},
  {type:'MBA · Final requirement',title:'Aksal Luxury Strategic Plan',description:'Systematic Approach in Driving Greater Performance and Productivity: a strategic framework for stronger performance, operational productivity, and long-term growth.',url:'https://drive.google.com/file/d/1y_B4yKszwrbVoCWqG9flVz90VSSNmWrN/view?usp=sharing'},
  {type:'PBDIT · System development',title:'25%–50% progress',description:'Established the system’s core functionality, structure, and how its components work together before adding the visual design layer.',url:'https://drive.google.com/file/d/1gpF-cmnDBHO512uY3iKu2Toxadk1btET/view?usp=sharing'},
  {type:'PBDIT · System development',title:'50%–75% progress',description:'A near-complete system with design incorporated; remaining work focused on refining functions, adding features, and improving performance and usability.',url:'https://drive.google.com/file/d/1OChoT5hvAZndWN3bsLziEYxBIXp6Io0f/view?usp=sharing'},
  {type:'PBDIT · Final presentation',title:'Final system presentation',description:'Presentation of the completed system and its final functionality.',url:'https://drive.google.com/file/d/1icnATEeKYCa4Mk_Pbp4mdrmbU2BzTqxF/view?usp=sharing'},
  {type:'PBDIT · Capstone',title:'Final requirement / capstone',description:'Final academic requirement completed for the Post-Baccalaureate Diploma in Information Technology program.',url:'https://drive.google.com/file/d/1icnATEeKYCa4Mk_Pbp4mdrmbU2BzTqxF/view?usp=sharing'}
];
const certificates = [
  {name:'Civil Service · Sub-Professional Eligibility',issuer:'Civil Service Commission',date:'August 2022'},
  {name:'Purchase Order Information System (POIS)',issuer:'PEC LTD',date:'February 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Time Management Information System (TMIS)',issuer:'PEC LTD',date:'February 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Equipment Booking Information System (EQIS)',issuer:'PEC LTD',date:'February 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Learning Management System (LMS)',issuer:'PEC LTD',date:'February 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Job Reporting Information System (JRIS)',issuer:'PEC LTD',date:'February 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Human Resource Information System (HRIS)',issuer:'PEC LTD',date:'January 2020',id:'1TVtSpEwx1KAnXbUgbkbrgHcmEQI9axm8'},
  {name:'Network Defense',issuer:'Cisco',date:'June 2024',url:'https://www.credly.com/badges/ae26897c-be24-4a4a-a190-cf09b99887ba/linked_in_profile'},
  {name:'Endpoint Security',issuer:'Cisco',date:'May 2024',url:'https://www.credly.com/badges/d6576a46-2bf9-4a6b-9fa0-2220d0766004/linked_in_profile'},
  {name:'Introduction to Cybersecurity',issuer:'Cisco',date:'March 2024',url:'https://www.credly.com/badges/7398b387-062a-445a-a0db-9741c57aaee1/linked_in_profile'},
  {name:'Teaching English as a Foreign Language (TEFL)',issuer:'Hai English Training and Assessment',date:'December 2025',id:'1lU1XZVKoLIezr9YHFjzDeV1oM-9NRRJb'},
  {name:'Teaching English to Speakers of Other Languages (TESOL)',issuer:'Hai English Training and Assessment',date:'December 2025',id:'1ZKuxItNk89YNVZxD4q_yqlCS4-gf-5x8'}
];

function imageLink(id, className='', label='Portfolio image') {
  return `<a class="${className}" href="${driveView(id)}" target="_blank" rel="noopener" aria-label="Open ${label}"><img src="${driveImage(id)}" alt="${label}" loading="lazy" referrerpolicy="no-referrer"></a>`;
}
function fillPhotoTrack(containerId, ids, className) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const makeTiles = () => ids.map((id, index) => imageLink(id, className, `Photo ${index + 1} — open original`)).join('');
  container.innerHTML = `<div class="${containerId === 'about-gallery' ? 'photo-track' : 'vertical-track'}">${makeTiles()}${makeTiles()}</div>`;
}
function fillMiniGallery(containerId, ids) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const makeTiles = () => ids.map((id, i) => imageLink(id, 'vertical-tile', `Gallery photo ${i + 1} — open original`)).join('');
  el.innerHTML = `<div class="vertical-track">${makeTiles()}${makeTiles()}</div>`;
}
function fillMediaGallery(containerId, items, {video=false}={}) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((item, index) => {
    const id = typeof item === 'string' ? item : item.id;
    const title = typeof item === 'string' ? `Creative item ${index + 1}` : item.title;
    const url = (typeof item === 'string' ? '' : item.url) || driveView(id);
    const preview = video
      ? `<iframe class="video-preview" src="${driveVideoPreview(id)}" title="${title}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      : `<img src="${driveImage(id)}" alt="${title}" loading="lazy" referrerpolicy="no-referrer">`;
    if (video) return `<div class="media-tile video-tile"><div class="media-thumb">${preview}</div><span class="media-title">${title}</span></div>`;
    return `<a class="media-tile" href="${url}" target="_blank" rel="noopener" aria-label="Open ${title}"><div class="media-thumb">${preview}</div><span class="media-title">${title}</span></a>`;
  }).join('');
}
function fillGraphicGallery(containerId, ids, direction) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const makeTiles = () => ids.map((id, index) => `<a class="graphic-tile" href="${driveView(id)}" target="_blank" rel="noopener" aria-label="Open graphic ${index + 1}"><img src="${driveImage(id)}" alt="Graphic ${index + 1}" loading="lazy" referrerpolicy="no-referrer"></a>`).join('');
  el.innerHTML = `<div class="graphic-track ${direction}">${makeTiles()}${makeTiles()}</div>`;
}
fillPhotoTrack('about-gallery', photoIds, 'photo-tile');
fillPhotoTrack('pec-gallery', pecIds, 'vertical-tile');
fillMiniGallery('singapore-gallery', singaporeIds);
fillMiniGallery('us-gallery', usIds);
fillMediaGallery('event-gallery', eventVideos, {video:true});
const eventGallery = document.getElementById('event-gallery');
if (eventGallery) eventGallery.insertAdjacentHTML('beforeend', '<a class="media-tile folder-tile" href="https://drive.google.com/drive/u/1/folders/1EdFF_6TATe1h1KtJrkJpJZDyggY1pOUQ" target="_blank" rel="noopener"><div class="media-thumb folder-preview"><span>▶</span></div><span class="media-title">Live event video folder ↗</span></a>');
fillGraphicGallery('horizontal-gallery', horizontalIds, 'graphic-up');
fillGraphicGallery('vertical-gallery', verticalIds, 'graphic-right');
fillMediaGallery('ads-gallery', adIds, {video:true});
fillMediaGallery('message-gallery', [
  {id:'1Oer_RJzDt1AJLonSDvPJTp_GxFQO3t2U',title:'PNI testimonial video'},
  {id:'1XtYwecmh1D0ErVxcc2sGzwpjxocRcqI5',title:'PNI short message · Rocket Nurse'}
], {video:true});



function documentPreview(url) {
  const match = url.match(/\/(?:document|file)\/d\/([^/]+)/);
  if (!match) return '';
  const hostPath = url.includes('docs.google.com/document/') ? 'docs.google.com/document' : 'drive.google.com/file';
  return `https://${hostPath}/d/${match[1]}/preview`;
}
const researchGrid = document.getElementById('research-grid');
if (researchGrid) researchGrid.innerHTML = research.map(item => `<article class="research-card reveal"><div class="research-top"><span class="research-type">${item.type}</span><span class="research-type">↗</span></div><div class="research-preview"><iframe src="${documentPreview(item.url)}" title="Preview: ${item.title}" loading="lazy" referrerpolicy="no-referrer"></iframe></div><h4>${item.title}</h4><p>${item.description}</p><a class="research-link" href="${item.url}" target="_blank" rel="noopener">View research / project ↗</a></article>`).join('');
const certificateGrid = document.getElementById('certificate-grid');
if (certificateGrid) certificateGrid.innerHTML = certificates.map(cert => {
  const href = cert.url || (cert.id ? driveView(cert.id) : '');
  const download = cert.id ? `https://drive.google.com/uc?export=download&id=${cert.id}` : '';
  return `<article class="certificate-card reveal"><span class="cert-icon">✧</span><h4>${cert.name}</h4><p>Issued by ${cert.issuer}</p><span class="cert-date">${cert.date}</span><div class="cert-actions">${href ? `<a href="${href}" target="_blank" rel="noopener">View credential ↗</a>` : '<span class="disabled">Credential available upon request</span>'}${download ? `<a href="${download}" target="_blank" rel="noopener">Download ↓</a>` : ''}</div></article>`;
}).join('');

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, {rootMargin: '-30% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
