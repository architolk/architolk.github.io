---
layout: single
author_profile: false
permalink: /calendar/compare

sidebar:
  nav: "calendar"

title: "Comparing initialization routines"
excerpt: "Information about the driver software for the EPD_7in5b_V2 with ESP32"
action: false
classes: wide

---
## Arduino R4 new and old

|UBYTE EPD_7IN5B_V2_Init_old(void)|UBYTE EPD_7IN5B_V2_Init(void)|void EPD_Init(void) (GDEY075Z08)|
|---------------------------------|-----------------------------|--------------------------------|
|EPD_7IN5B_V2_Reset();                                                |EPD_7IN5B_V2_Reset();                                                |EPD_W21_RST_0;		// Module reset|
|                                                                     |                                                                     |delay(10);//At least 10ms delay|
|                                                                     |                                                                     |EPD_W21_RST_1;|
|                                                                     |                                                                     |delay(10);//At least 10ms delay|
|                                                                     |                                                                     |lcd_chkstatus();|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0x01);			//POWER SETTING                 |EPD_7IN5B_V2_SendCommand(0x01);			//POWER SETTING                 |EPD_W21_WriteCMD(0x01);			//POWER SETTING|
|EPD_7IN5B_V2_SendData(0x07);                                         |EPD_7IN5B_V2_SendData(0x07);                                         |EPD_W21_WriteDATA (0x07);|
|EPD_7IN5B_V2_SendData(0x07);    //VGH=20V,VGL=-20V                   |EPD_7IN5B_V2_SendData(0x07);    //VGH=20V,VGL=-20V                   |EPD_W21_WriteDATA (0x07);    //VGH=20V,VGL=-20V|
|EPD_7IN5B_V2_SendData(0x3f);		//VDH=15V                             |EPD_7IN5B_V2_SendData(0x3f);		//VDH=15V                             |EPD_W21_WriteDATA (0x3f);		//VDH=15V|
|EPD_7IN5B_V2_SendData(0x3f);		//VDL=-15V                            |EPD_7IN5B_V2_SendData(0x3f);		//VDL=-15V                            |EPD_W21_WriteDATA (0x3f);		//VDL=-15V|
|                                                                     |                                                                     ||
|                                                                     |//Enhanced display drive(Add 0x06 command)                           |//Enhanced display drive(Add 0x06 command)|
|                                                                     |EPD_7IN5B_V2_SendCommand(0x06);			//Booster Soft Start            |EPD_W21_WriteCMD(0x06);			//Booster Soft Start |
|                                                                     |EPD_7IN5B_V2_SendData(0x17);                                         |EPD_W21_WriteDATA (0x17);|
|                                                                     |EPD_7IN5B_V2_SendData(0x17);                                         |EPD_W21_WriteDATA (0x17);|
|                                                                     |EPD_7IN5B_V2_SendData(0x28);                                         |EPD_W21_WriteDATA (0x28);|
|                                                                     |EPD_7IN5B_V2_SendData(0x17);                                         |EPD_W21_WriteDATA (0x17);|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0x04); //POWER ON                           |EPD_7IN5B_V2_SendCommand(0x04); //POWER ON                           |EPD_W21_WriteCMD(0x04); //POWER ON|
|DEV_Delay_ms(100);                                                   |DEV_Delay_ms(100);                                                   |
|EPD_7IN5B_V2_WaitUntilIdle();                                        |EPD_7IN5B_V2_WaitUntilIdle();                                        |lcd_chkstatus();        //waiting for the electronic paper IC to release the idle signal|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0X00);			//PANNEL SETTING                |EPD_7IN5B_V2_SendCommand(0X00);			//PANNEL SETTING                |EPD_W21_WriteCMD(0X00);			//PANNEL SETTING|
|EPD_7IN5B_V2_SendData(0x0F);   //KW-3f   KWR-2F	BWROTP 0f	BWOTP 1f  |EPD_7IN5B_V2_SendData(0x0F);   //KW-3f   KWR-2F	BWROTP 0f	BWOTP 1f  |EPD_W21_WriteDATA(0x0F);   //KW-3f   KWR-2F	BWROTP 0f	BWOTP 1f|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0x61);        	//tres                      |EPD_7IN5B_V2_SendCommand(0x61);        	//tres                      |EPD_W21_WriteCMD(0x61);			//resolution setting|
|EPD_7IN5B_V2_SendData(0x03);		//source 800                          |EPD_7IN5B_V2_SendData(0x03);		//source 800                          |EPD_W21_WriteDATA (EPD_WIDTH/256);|
|EPD_7IN5B_V2_SendData(0x20);                                         |EPD_7IN5B_V2_SendData(0x20);                                         |EPD_W21_WriteDATA (EPD_WIDTH%256);|
|EPD_7IN5B_V2_SendData(0x01);		//gate 480                            |EPD_7IN5B_V2_SendData(0x01);		//gate 480                            |EPD_W21_WriteDATA (EPD_HEIGHT/256);|
|EPD_7IN5B_V2_SendData(0xE0);                                         |EPD_7IN5B_V2_SendData(0xE0);                                         |EPD_W21_WriteDATA (EPD_HEIGHT%256);|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0X15);                                      |EPD_7IN5B_V2_SendCommand(0X15);                                      |EPD_W21_WriteCMD(0X15);|
|EPD_7IN5B_V2_SendData(0x00);                                         |EPD_7IN5B_V2_SendData(0x00);                                         |EPD_W21_WriteDATA(0x00);|
|                                                                     |                                                                     |
|EPD_7IN5B_V2_SendCommand(0X50);			//VCOM AND DATA INTERVAL SETTING|EPD_7IN5B_V2_SendCommand(0X50);			//VCOM AND DATA INTERVAL SETTING|EPD_W21_WriteCMD(0X50);			//VCOM AND DATA INTERVAL SETTING|
|EPD_7IN5B_V2_SendData(0x11);                                         |EPD_7IN5B_V2_SendData(0x11);                                         |EPD_W21_WriteDATA(0x11);  //0x10  --------------|
|EPD_7IN5B_V2_SendData(0x07);                                         |EPD_7IN5B_V2_SendData(0x07);                                         |EPD_W21_WriteDATA(0x07);|
|                                                                     |                                                                     ||
|EPD_7IN5B_V2_SendCommand(0X60);			//TCON SETTING                  |EPD_7IN5B_V2_SendCommand(0X60);			//TCON SETTING                  |EPD_W21_WriteCMD(0X60);			//TCON SETTING|
|EPD_7IN5B_V2_SendData(0x22);                                         |EPD_7IN5B_V2_SendData(0x22);                                         |EPD_W21_WriteDATA(0x22);|
|                                                                     |                                                                     |
|EPD_7IN5B_V2_SendCommand(0X82);                                      |                                                                     |
|EPD_7IN5B_V2_SendData(0x08);                                         |                                                                     |
|EPD_7IN5B_V2_SendCommand(0X30);                                      |                                                                     |
|EPD_7IN5B_V2_SendData(0x06);                                         |                                                                     |
|                                                                     |                                                                     |
|    EPD_7IN5B_V2_SendCommand(0x65);  // Resolution setting           |                                                                     |
|    EPD_7IN5B_V2_SendData(0x00);                                     |                                                                     |
|    EPD_7IN5B_V2_SendData(0x00);//800*480                            |                                                                     |
|    EPD_7IN5B_V2_SendData(0x00);                                     |                                                                     |
|    EPD_7IN5B_V2_SendData(0x00);                                     |                                                                     |

The difference is the booster soft start is different (also different than the default value), and in the old one resolution setting is stated (but same as default) and two other settings are set (one, VCOM, is different from default). The GooDesign code doesn't have the differences between these two initialization routines.

It seems that the Enhanced display drive is actually THE difference between the version 2.0 and version 3.0 displays.
