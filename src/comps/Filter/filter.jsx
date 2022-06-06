import React, { useRef, useState } from 'react';

function Filter(props) {
  const setter = props.setter

  const no = useRef("")
  const url = useRef("")
  const code = useRef("")
  const surl = useRef("")


  function processKeyDown(e, choice) {
	switch (choice) {
		case 0:
			no.current.value = e.target.value
			break;
		case 1:
			url.current.value = e.target.value
			break;
		case 2:
			code.current.value = e.target.value
			break;
		case 3:
			surl.current.value = e.target.value
			break;
	}

	setter({no: no.current.value, url: url.current.value, code: code.current.value, surl: surl.current.value})
  }

  return (
	<div className="list-header bg-gray-400">
		<input placeholder='番号' onChange={(e) => processKeyDown(e, 0)} ref={no}/>
		<input placeholder='URL' onChange={(e) => processKeyDown(e, 1)} ref={url}/>
		<input placeholder='コード' onChange={(e) => processKeyDown(e, 2)} ref={code}/>
		<input placeholder='SURL' onChange={(e) => processKeyDown(e, 3)} ref={surl}/>
	</div>
  );
}

export default Filter