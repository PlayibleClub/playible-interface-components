import PackComponents from './PackComponents';
import React from 'react';

const PackContainer = (props) => {
  const { accountPacks } = props;

  function Packs({ accountPacks }) {
    return (
      <>
        {accountPacks &&
          accountPacks.map(({ metadata, token_id }) => (
            <div>
              <PackComponents image={metadata.media} id={token_id}></PackComponents>
            </div>
          ))}
      </>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-y-3 mt-4 md:grid-cols-4 md:ml-7 md:mr-7 md:mt-12">
      <Packs accountPacks={accountPacks}></Packs>
    </div>
  );
};

export default PackContainer;