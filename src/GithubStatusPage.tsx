import React from 'react';

function GithubStatusPage() {
  return (
    <div className="space-y-6 w-[25%] px-8 pb-36"> 
      <div className="flex items-center justify-between p-4 bg-[#2B2238] rounded-lg w-80 border-2 border-purple-600">
        {/* GitHub Icon and Text */}
        <div className="flex items-center space-x-3">
          <div className="bg-none p-2 rounded-full border-2 border-purple-600">
            {/* GitHub Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#9333EA"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1C5.373 1 0 6.373 0 13c0 5.42 3.438 10.032 8.207 11.657.6.11.793-.26.793-.577v-2.013c-3.338.724-4.042-1.613-4.042-1.613-.546-1.388-1.333-1.758-1.333-1.758-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.825 2.805 1.298 3.488.993.107-.775.418-1.298.762-1.598-2.664-.3-5.468-1.334-5.468-5.93 0-1.31.467-2.38 1.235-3.22-.124-.3-.534-1.515.118-3.162 0 0 1.007-.323 3.301 1.23.96-.267 1.987-.4 3.008-.404 1.02.004 2.047.137 3.007.404 2.294-1.553 3.301-1.23 3.301-1.23.653 1.647.243 2.862.12 3.162.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.478 5.918.43.373.813 1.102.813 2.22v3.292c0 .32.19.694.8.577C20.562 23.03 24 18.42 24 13c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Git repository</p>
            <p className="text-white font-semibold">expressjs-cn8x</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm">Deploying</p>
          <p className="text-white font-semibold">⚓ Other</p>
        </div>
      </div>

      {/* Third item */}
      <div className="bg-transparent text-white  rounded-md w-80">
        <p className="text-lg font-semibold">You're almost done.</p>
        <p className="text-sm text-gray-400">Please follow the steps to configure your Project and deploy it.</p>
      </div>

      {/* Fourth item */}
      <div className="flex flex-col items-start space-y-4">
        {/* Step 1 - Completed */}
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full bg-transparent">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#15211F]">
                {/* Check icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#10B981"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div className="h-16 border-l-4 border-dotted border-blue-500"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg text-gray-300 font-semibold">Configure GitHub</h3>
          </div>
        </div>

        {/* Step 2 - Current */}
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-purple-500 rounded-full bg-transparent">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#15211F] font-bold text-xl">
                2
              </div>
            </div>
            <div className="h-16 border-l-4 border-dotted border-blue-500"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg text-gray-300 font-semibold">
              Configure Deployment
            </h3>
            <p className="text-sm text-gray-500">
              Specify how Exopods will build your site.
            </p>
          </div>
        </div>

        {/* Step 3 - Upcoming */}
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#15211F] font-bold text-xl">
              3
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg text-gray-500">Go Live</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubStatusPage;
