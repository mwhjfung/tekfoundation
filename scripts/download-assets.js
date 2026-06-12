#!/usr/bin/env node
/**
 * Asset download helper — run this once to fetch all Drive assets.
 * Usage: node scripts/download-assets.js
 * Requires: GOOGLE_ACCESS_TOKEN env variable
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

// Map of destination path → Google Drive file ID
const FILES = {
  // Brand logos
  'images/logos/brand/tekfoundation-logo-primary.png':          '1Z8g36tpn0KtuaJLWiEgDDQrhEfvEy50o',
  'images/logos/brand/tekfoundation-logo-variant-a.png':        '18fm7B-AIyOD8Hjk5Rvu05THYxT8-uiCi',
  'images/logos/brand/tekfoundation-logo-icon.png':             '10C-EiZmZnhWWfMg_l9YdW4n4ozomgLNs',
  'images/logos/brand/tekfoundation-logo-variant-b.png':        '13BeI62ytoM5hIQDPrDrdjHzglpStlwao',
  'images/logos/brand/tekfoundation-logo-variant-c.png':        '1yeCPnTbrPzNHN1XpAIBBjkFxD1sZAvWL',
  'images/logos/brand/tekfoundation-logo-variant-d.png':        '1e9-tJZOhGtfXcQAbDh-KQiiU2IzB78bZ',
  'images/logos/brand/tekfoundation-logo-variant-e.png':        '1Gp33c3sjLw0iG2RC5aKO6bYNoEcZkA-1',

  // ACNC badge
  'images/logos/acnc/acnc-registered-charity-logo.png':         '1NtlyndXKBHGizRcm5xuyFoqN9H9IVoyJ',
  'images/logos/acnc/acnc-registered-charity-logo-reverse.avif':'1yvrFngWs90RuNuBE5k-NI4-G4-LYYtTA',
  'images/logos/acnc/acnc-registered-charity-logo.webp':        '1JvTShXdJ2VumWOgckerziaNn5imRfgPc',

  // Pro bono & community partner logos
  'images/logos/partners/tekfinder-founding-partner-logo.png':  '1y0jweqkifw14suvfi48uTS8pxResMIsP',
  'images/logos/partners/sefa-logo.png':                        '1OkaoM_-ui75WOIH0HsQMQmZ0da9lcDWo',
  'images/logos/partners/sefa-logo-on-red.png':                 '1Rkkfpcaa6XQAk5ediR8WtSM8H4EaHh3V',
  'images/logos/partners/bd-logo-black.png':                    '1SMwBBaD1xnkO60KLCt6LETdb5oPwdNDP',
  'images/logos/partners/bd-logo-white.png':                    '1MoW2317QMRwCuVfqLfT4q3gJo7qFNcmP',
  'images/logos/partners/able2-logo.png':                       '19OR3FWGWZ8imwpVu_FfuxAwBsdhakDWP',
  'images/logos/partners/charitabl-logo.png':                   '10GKzeU4FYAUyeIouxfK1DiPb3HpifnGF',
  'images/logos/partners/land-on-heart-logo.png':               '1jtwb9N1jL7unaHJDiQgGjfo_m0fKS4ws',
  'images/logos/partners/stackup-logo.png':                     '1sDsmzV6IcgR5CLy_XhB3f1QMsrxg2Wlk',
  'images/logos/partners/100-women-in-finance-logo.png':        '1dALPyicqbw-V1zqACOPIhJUtBLlFRWT7',
  'images/logos/partners/minter-ellison-logo.png':              '1Q9Ve4IPMFpxV5j0MxfMjrwSFs0XSZegv',
  'images/logos/partners/ix-logo.png':                          '1TCqj90F_ecs_0T6dfeeJJpLUVLoZ1D5d',

  // Charity logos
  'images/logos/charities/ability-enterprises-logo.jpg':        '1860QSZgt8jVNBPLl3v8UrDvsa4f60GPr',
  'images/logos/charities/ozharvest-logo.jpg':                  '1Wlmc4VobuxNXpCErPG9fjsD_vHHmlO3t',
  'images/logos/charities/ozharvest-logo.svg':                  '1XGgS-aP02ba_W-TJv0znHGi-HU9CCPKQ',
  'images/logos/charities/grow-the-future-logo.png':            '1w0OPAd72vgZZN0FD7yvqVKU2YqRiuxxv',
  'images/logos/charities/dcc-logo.png':                        '19ZMD2Yxr2bvaG98kKgMgPhfqhr3EpMDI',
  'images/logos/charities/fiji-book-drive-logo.png':            '1fJ5qFUnUMxnnQ0rM_DqI-AOxK-M48fqT',
  'images/logos/charities/secna-logo.png':                      '1rYrnJtNOKSRydh3cKQeKkQo4DZp_gd0Z',
  'images/logos/charities/localkind-logo.webp':                  '1ez8voojrNCQr2_xi8umTSpEj2BC_yQZK',
  'images/logos/charities/future2-logo.png':                    '1xYZN_ruEME1awAOPKn28_KZvz1NauWDf',
  'images/logos/charities/wagga-womens-health-centre-logo.png': '16umCS-mPZMp5f1ZwPrL9VhXR2cnmNY0Z',
  'images/logos/charities/diabetes-australia-logo.webp':        '19m-B5nxtl-uSI0jCSxzbfIyyWc4PQwcz',
  'images/logos/charities/kookaburra-kids-logo.png':            '15ujmV-WdwKk3dM95TOTAIxJ5Oejlea5x',
  'images/logos/charities/house-of-welcome-logo.png':           '16Ojymn-f7Db2ep8UnuX_Lt88whsStLw3',
  'images/logos/charities/procter-gamble-logo.png':             '19pzcRrDgV5uiJn3BIvoyQr_SZ0dZcTBT',
  'images/logos/charities/sharing-with-friends-logo.svg':       '1MCXzs1e6qBaesjwqfKjMxXNk70083GVl',
  'images/logos/charities/arv-logo.png':                        '1JR_qpxUrsvVgdE_akFBi2ltu0YyUwo27',

  // Team headshots
  'images/team/joni-fleischer-head-of-tekfoundation.jpg':       '1ojr0VecPvScNVQyIwgsAas8W8FcGjR3y',
  'images/team/joni-fleischer-professional-headshot.jpg':       '1AzoatU9ldDJ-Ga6EpMUJMqS1UBNYZWC9',
  'images/team/robert-board-director.jpg':                      '1pTnsw-9SZ9z_NBuIuGYjJO2Hpx0r28K3',
  'images/team/greg-board-director.jpeg':                       '1fuZ1bFrd7P6zMIw6RF68kVO-ZOoPRS9j',
  'images/team/angela-board-director.jpeg':                     '1ucYUZR3aoIW8cZ4ms0cMGGNxH1303Qh_',
  'images/team/aidan-board-director.jpeg':                      '1vj4IfUVDvcPApDd3y40T70OZwsJpgHZ9',
  'images/team/sinead-board-director.jpeg':                     '1-qzLn-TL8bLSCiIDE_RReyBaqGV3fYtd',
  'images/team/lucy-board-director.jpg':                        '19jh6XauGI2fLw9ztlxWsIxMo-V25n3jz',
  'images/team/betsy-amaro-volunteer-team.jpeg':                '1vvUWvbnG66l2z42VQ5dHFFlfg0S6mVjD',
  'images/team/margaret-board-director.jpeg':                   '10raDNfQeh2mhoTB2dgv7n6SJDdP25xq0',

  // Testimonial headshots
  'images/testimonials/brad-volunteer-tekfoundation.jpeg':      '1MoQywbtFlNnlyYb4FzRp_FzDgvMRZWbj',
  'images/testimonials/cheryl-charity-partner.jpeg':            '1J3ST0V1x2GJMGvC_guxPikukYp1stosd',
  'images/testimonials/yvonne-balakian-skillz4me.png':          '1erGX-vBmNiqVZaRwJOfAis0jsLjGy8n3',
  'images/testimonials/maddie-future2-charity-partner.jpeg':    '1MhkmKa7E7W1zHCFGAtIkgcklRu7N4lye',
  'images/testimonials/claire-ability-enterprises.jpeg':        '1Wzu8sl3xvqQpPdHzt8ILRkeXrm9eKS6Z',
  'images/testimonials/james-h-volunteer-tekfoundation.jpeg':   '19dcncsIu1w_YCYmR_-dMUugnV5LoqRZw',

  // Hero & event photography
  'images/hero/tekfoundation-community-event-networking.png':   '1Va3k60JSEkx-weC7Hi3zdehVRgdU01ce',
  'images/hero/tekfoundation-event-panel.png':                  '1xZwIkzL0sEY8om0lPPnPnG2rb3bwZjhR',
  'images/hero/tekfoundation-event-crowd.png':                  '1gZzKgpuP4fbX1XkbI7g0X-VO_VfxWHLQ',
  'images/hero/tekfoundation-group-photo.png':                  '1vZQA-IRTb3CFG_lgGBSlSRVzyffjmUSw',
  'images/hero/tekfoundation-event-workshop.png':               '1chHbcGo320iglFKVqwlNUSoOQm_ffSLA',
  'images/hero/tekfoundation-volunteer-in-action.png':          '1JQkShOnkAWZeUHqbsJItMWBBa0zuH1uG',
  'images/hero/tekfoundation-volunteer-portrait.jpg':           '1lRgJbES8UcXDEdJvAbspVNLXjtfbdXG_',
  'images/hero/tekfoundation-volunteer-kids-cancer.jpg':        '1WsmCvSzvAuxHo_5jZW657HdfqCdJa_CM',
  'images/hero/tekfoundation-event-booth-1.jpg':                '1zWydFnYAmWh_dDsWgCifa1aEFOsVpEMd',
  'images/hero/tekfoundation-event-booth-2.jpg':                '18g64yHeNLg3IrW634QY9nZwyo_7y9yOQ',
  'images/hero/tekfoundation-event-photo.jpg':                  '1nJxa5Wo66aXpaLBcwxygCqxhUOgVvPcG',
  'images/hero/tekfoundation-community-gathering-1.jpg':        '1kg9wgF4T8PS4gBVuXGfHzoD8mTxxlNfQ',
  'images/hero/tekfoundation-community-gathering-2.jpg':        '1V58Kyc3jMu0bxmcrbkWl7luz2F9Obj6b',
  'images/hero/tekfoundation-community-gathering-3.jpg':        '1-RBxKvvy0oC1SJH4KREKyt3SPCHoiALN',
  'images/hero/tekfoundation-community-gathering-4.jpg':        '1rDNUTeAGBWmXsnfTgUfvzhRz3c8ejhiq',
  'images/hero/tekfoundation-community-gathering-5.jpg':        '1iL-Rd2mxvEoK5EFMlq4yQFkjyegsBVYe',
  'images/hero/tekfoundation-event-slide-how-it-works.jpeg':    '1BhvD5x3WUYbwuhdl5BWBEkl1NEUL3w89',
  'images/hero/tekfoundation-event-slide-what-we-do.jpg':       '1KtaqPnAFgkART6_A7282Hy26F46mtJPf',
  'images/hero/tekfoundation-event-snapshot.jpg':               '1J_d6R0Tu-LpV2GTnRSQbkiKhd5I_82O1',
  'images/hero/tekfoundation-event-name-badges.jpg':            '1o3Y5hFH0MvBEkFSJDgmFgYce4w5wlQ8c',
  'images/hero/tekfoundation-event-attendees-1.jpg':            '1J-1qwSS2ZU9T_Tp0zd2d2AGoU-38ufVP',
  'images/hero/tekfoundation-event-attendees-2.jpg':            '1MOVAxVOc3G6mLLAoWEfEEG0uJT7WyjtE',
  'images/hero/tekfoundation-event-attendees-3.jpg':            '1BZNdAS9do_QE3eYnBoOlIB_BS8jx3EkY',
  'images/hero/tekfoundation-event-attendees-4.jpg':            '1KAoT6CRtRGCDMM9k9RL-NNdzEAYPVxNH',
  'images/hero/tekfoundation-event-attendees-5.jpg':            '1jrK5NdAcsUiPpioyrug-iLYlwERN_Or4',
  'images/hero/tekfoundation-event-attendees-6.jpg':            '1b_wxyASGr7gt9vKru-EsxFAP6oViVkbF',
  'images/hero/tekfoundation-event-attendees-7.jpg':            '1tyafin0g_ZmRpSovcA2t2hHtKFQSTaz-',
  'images/hero/tekfoundation-kids-cancer-certificate.jpg':      '1x6XXpA-yJVccasF567V2Hr65t6A4fIkO',

  // Fonts
  'fonts/GT-Walsheim-Bold.otf':                                  '1-1WOh5-I59NCfWH04wcWx3Sd_8BMusSs',
  'fonts/GT-Walsheim-Medium.otf':                                '196Fz_9zPsD3LssteR0YFofd-eQ_DZgnC',
  'fonts/GT-Walsheim-Regular.otf':                               '1JVE9slLbMf9_iLlGE5CzWUndmV5QTjBX',
  'fonts/MyriadPro-Regular.otf':                                 '1WzV19EhkE4AfR-eR_jrZ_VSMfRGYs07S',

  // Impact report
  'docs/tekfoundation-2025-impact-report.pdf':                   '1E67Cfb_bYZ69Yc2HvKQpK7C7odd3-yVB',
};

const token = process.env.GOOGLE_ACCESS_TOKEN;
if (!token) {
  console.error('Set GOOGLE_ACCESS_TOKEN env variable first.');
  console.error('Get it from: gcloud auth print-access-token');
  process.exit(1);
}

function download(fileId, destPath) {
  return new Promise((resolve, reject) => {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
    const req = https.get(url, { headers: { Authorization: `Bearer ${token}` } }, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        // Follow redirect
        https.get(res.headers.location, { headers: { Authorization: `Bearer ${token}` } }, (res2) => {
          const out = fs.createWriteStream(destPath);
          res2.pipe(out);
          out.on('finish', () => resolve(destPath));
          out.on('error', reject);
        });
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${fileId}`));
        return;
      }
      const out = fs.createWriteStream(destPath);
      res.pipe(out);
      out.on('finish', () => resolve(destPath));
      out.on('error', reject);
    });
    req.on('error', reject);
  });
}

async function run() {
  let ok = 0, fail = 0;
  for (const [rel, id] of Object.entries(FILES)) {
    const dest = path.join(PUBLIC, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    try {
      await download(id, dest);
      console.log(`✓ ${rel}`);
      ok++;
    } catch (e) {
      console.error(`✗ ${rel}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} succeeded, ${fail} failed.`);
}

run();
