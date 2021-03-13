/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable operator-linebreak */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
import React from 'react';
import './container.css';

interface IContainer {
  headerValue: string;
  propsData: any;
  url: string;
}

const Container: React.FC<IContainer> = ({ headerValue, propsData, url }) => {
  return (
    <div className="widget m-2 float-left">
      <header className="header text-xl">{headerValue}</header>
      <div className="flex">
        <div className="w-1/3 info">
          <div className="p-2">STATS:</div>
          <div className="px-3 mt-4">
            <div className="flex justify-between">
              <div>Attribute 1</div>
              <div>65%</div>
            </div>

            <progress
              className="w-full h-2 -mt-1"
              id="file"
              value="65"
              max="100"
            >
              65%
            </progress>

            <div className="mt-2">
              <div className="flex justify-between">
                <div>Attribute 2</div>
                <div>30%</div>
              </div>
              <div className="">
                <progress
                  className="w-full h-2 -mt-1"
                  id="file"
                  value="30"
                  max="100"
                >
                  30%
                </progress>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between">
                <div>Attribute 3</div>
                <div>5%</div>
              </div>
              <div className="">
                <progress
                  className="w-full h-2 -mt-1"
                  id="file"
                  value="5"
                  max="100"
                >
                  5%
                </progress>
              </div>
            </div>
          </div>
          <div className="">
            <a
              href={`http://13.232.99.42/${url}`}
              target="_blank"
              className="mt-2 text-center flex items-center"
            >
              <div
                className="w-3/4 float-left p-3"
                style={{ background: '#49b4e8' }}
              >
                View API
              </div>
              <div className="p-3 w-1/4 " style={{ background: '#3099dd' }}>
                <span className="fa fa-arrow-right fa-lg h-2">{''}</span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-2/3">
          <div className="w-full flex justify-center border-b border-color-black text-2xl">
            <div className="w-3/4 text-textColor-100 font-medium px-6 p-3">
              {propsData.filter.label}
            </div>
            <div className="w-1/4 border-l flex justify-center text-textColor-200 font-medium items-center">
              {`${propsData.filter.value}%`}
            </div>
          </div>
          <div className="flex justify-around py-2 text-xl font-medium border-b">
            {propsData?.dataSet?.header.length > 0 &&
              propsData?.dataSet?.header.map(
                (header: string, index: number) => {
                  return <div key={`${index + header}`}>{header}</div>;
                },
              )}
          </div>
          <div className="h-36 overflow-y-scroll">
            <div className="table w-full ...">
              <div className="table-row-group">
                {propsData?.dataSet?.data?.length > 0 &&
                  propsData?.dataSet?.data?.map((data: any, rowIdx: number) => {
                    return (
                      <div
                        key={`${data.color + rowIdx}`}
                        className={`border-b table-row text-center text-xl ${
                          rowIdx % 2 === 0
                            ? 'bg-background-100'
                            : 'hover:bg-background-200'
                        }`}
                        style={{
                          color: data.color,
                        }}
                      >
                        <div className="table-cell py-1">{data.label}</div>
                        <div className="table-cell py-1 pr-1">{data.value}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
