import { useState, useEffect } from "react";

export function useApiData() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch("/api");
        const json = await response.json();
        setData(json);
        setIsLoading(false); // 数据已经加载完成
      } catch (error) {
        console.error(error);
      }
    }, 1000); // 每1秒钟获取新数据

    return () => clearInterval(intervalId); // 在组件卸载前清除定时器
  }, []);

  return { data, isLoading };
}
