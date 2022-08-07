import React, { useEffect } from 'react';

const Cookie = () => {
  function time() {
    document.getElementById('overlay').style.display = 'none';
  }

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('overlay').style.transform = 'translateY(0)';
    }, 3000);
  }, []);

  return (
    <div id="overlay">
      <div className="cookwind">
        <div className="cookwind__inner">
          <div className="cookwind__text">
            We use cookie to improve your experience on our site. By using our site you consent
            cookies.
          </div>
        </div>
      </div>
      <button onClick={() => time()} className="cookwind__close">
        OK
      </button>
    </div>
  );
};

export default Cookie;
