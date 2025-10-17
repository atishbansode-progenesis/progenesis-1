'use client';
import { useEffect } from 'react';

export default function ReviewsEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://progenesisivf.com/wp-admin/admin-ajax.php?action=brb_embed&brb_collection_id=22772&ts=" + new Date().getTime();
    script.async = true;
    document.getElementById('brb_collection_22772').appendChild(script);
  }, []);

  return (
    <>
    <h2>What our patient's are saying</h2>
    <div id="brb_collection_22772"></div>
    </>
  );
}
