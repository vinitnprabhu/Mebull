'use client';

import React, { useEffect, useRef, memo } from 'react';
import useTradingViewWidget from '@/hooks/UseTradingViewWidget';
import { cn } from '@/lib/utils';

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>
    height?: number;
    className?: string;
}

function TradingViewWidget({title, scriptUrl, config, height = 600, className} : TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className={cn("tradingview-widget-container", className)} ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
    </div>
  );
}
 
export default memo(TradingViewWidget);
