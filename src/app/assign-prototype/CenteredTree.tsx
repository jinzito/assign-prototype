import React, {useEffect, useRef, useState} from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "Selected Users",
    children: [
      {
        name: "Client1",
        children: [
          {
            name: "Engagement"
          },
          {
            name: "Project Name 2",
            children: [
              {
                name: "id"
              },
              {
                name: "description"
              },
              {
                name: "slug"
              },
              {
                name: "products",
                children: [
                  {
                    name: "items",
                    children: [
                      {
                        name: "id"
                      },
                      {
                        name: "name"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const containerStyles = {
  width: "100%",
  height: "100vh"
};

const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10
  }
};

const CenteredTree: React.FC = () => {

  const treeContainerRef = useRef(null);
  const [translate, setTranslate] = useState({x: 0, y: 0});


  useEffect(() => {
    // @ts-ignore
    const dimensions = treeContainerRef.current?.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 10,
      y: dimensions.width / 3
    })
  }, [])

  return (
    <div
      style={containerStyles}
      ref={treeContainerRef}
    >
      <Tree
        data={debugData}
        translate={translate}
        orientation={"horizontal"}
        // @ts-ignore
        nodeSvgShape={svgSquare}
        circleRadius={5}
      />
    </div>
  );
}

export default CenteredTree;
