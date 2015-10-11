# 有線通訊1 -- 送電波給自己或另一台

## 送給自己的執行結果

![](line1.png)


## 送給對方的執行結果

![](line1p2p.png)


## 程式

```CPP
int ledPin = 13; // 用 port 13 傳送訊息
int inPin = 7;   // 用 port 7  接收訊息
int msg[] = {0,1,1,1,0,0,0,1};

void setup()
{
  Serial.begin(9600);  
  pinMode(ledPin, OUTPUT);  // 用 port 13 傳送訊息
  pinMode(inPin, INPUT);    // 用 port 7  接收訊息
}

int i = 0;

void loop()
{
  int outVal = msg[i%8];
  digitalWrite(ledPin, outVal);    // 寫出一位元訊息到 port 13
  delay(100);
  int inVal = digitalRead(inPin);  // 從 port 7 讀取一位元訊息
  delay(100);
  Serial.println(inVal);
  i ++;  
  if (i%8==0) Serial.println("==="); 
}
```