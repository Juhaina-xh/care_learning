"use client";
import React from "react";
import Image from "next/image";

interface Chapter {
  id: number;
}

interface Module {
  id: number;
  translations?: {
    module_name: string;
  }[];
  chapters?: Chapter[];
}

interface ModulesProps {
  modules: Module[];
}

export default function Modules({ modules }: ModulesProps) {
  if (!modules || modules.length === 0) {
    return <div>No modules available.</div>;
  }

  return (
    <div className="modules-sec">
      <h3>{modules.length} Modules</h3>
      <div className="modules-row grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2 ms-2">
        {modules.map((mod, index) => {
          const moduleTitle =
            mod.translations?.[0]?.module_name || `Module ${index + 1}`;
          const chapterCount = mod.chapters?.length || 0;

          return (
            <div key={mod.id} className="modules-box flex">
              <Image
                src="/images/img-sq.png"
                alt={moduleTitle}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="modu-contents ms-5">
                <h4 className="w-3/4">{moduleTitle}</h4>
                <p>{chapterCount} chapters</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
