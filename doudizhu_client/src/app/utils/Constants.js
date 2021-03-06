

const Constants = {

    /**************************************************服务端发送的事件******************************************************************* */
    SEND_ALL_MESSAGE: 'BROADCAST_MESSAGE',                // 对所有玩家广播的消息

    SEND_ALL_CONNECTED: 'SEND_ALL_CONNECTED',             // 对其他玩家广播有人连接
    SEND_ONE_CONNECTED: 'SEND_ONE_CONNECTED',             // 对当前连接的玩家反馈连接状况

    SEND_ALL_BEGIN: 'SEND_ALL_BEGIN',                     // 对所有玩家广播游戏开始
    SEND_ALL_PLAYERLIST: 'SEND_ALL_PLAYERLIST',           // 向所有玩家发送玩家列表


    SEND_ALL_COMPETE: 'SEND_ALL_COMPETE',                 // 对其他玩家广播抢地主信息
    SEND_ALL_COMPETE_END: 'SEND_ALL_COMPETE_END',         // 对所有玩家广播抢地主结果
    SEND_ONE_COMPETE: 'SEND_ONE_COMPETE',                 // 对某位玩家提示开始抢地主叫分

    SEND_ONE_SHUFFLE_CARDS: 'SEND_ONE_SHUFFLE_CARDS',     // 向玩家发送新洗的牌
    SEND_ALL_EXTRACARDS: 'SEND_ALL_EXTRACARDS',           // 对所有玩家发送底牌

    SEND_ALL_DEAL: 'SEND_ALL_DEAL',                       // 对其他玩家广播出牌信息
    SEND_ONE_DEAL: 'SEND_ONE_DEAL',                       // 对某位玩家提示开始出牌

    SEND_ALL_LOSE: 'SEND_ALL_LOSE',                       // 对玩家广播游戏结束
    SEND_ALL_WIN: 'SEND_ALL_WIN',                         // 对玩家提示赢得本局游戏
    SEND_ALL_ABORT_GAME: 'SEND_ALL_ABORT_GAME',           // 对玩家广播游戏终止

    SEND_ALL_PLAYER_TURN: 'SEND_ALL_PLAYER_TURN',         // 向玩家广播现在轮到谁叫地主或者出牌

    /***********************************************客户端常量******************************************************************** */
    SCORE_ONE: '1',                                       // 抢地主1分
    SCORE_TWO: '2',                                       // 抢地主2分  
    SCORE_THREE: '3',                                     // 抢地主3分
    SCORE_ZERO: '0',                                      // 不叫

    NO_DEAL: 'NO_DEAL',                                   // 不出牌
    CANCEL_DEAL: 'CANCEL_DEAL',                           // 取消刚才选中的牌
    DEAL: 'DEAL',                                         // 出牌  

    /***********************************************服务端监听的事件*************************************************************** */
    LISTEN_CONNECT: 'LISTEN_CONNECT',                     // 监听玩家connect
    LISTEN_DISCONNECT: 'LISTEN_DISCONNECT',               // 监听玩家断开连接
    LISTEN_READY: 'LISTEN_READY',                         // 监听玩家准备
    LISTEN_COMPETE: 'LISTEN_COMPETE',                     // 监听玩家抢地主信息
    LISTEN_DEAL: 'LISTEN_DEAL',                           // 监听玩家出牌
    LISTEN_MESSAGE: 'LISTEN_MESSAGE',                     // 监听玩家发送消息
    LISTEN_PLAYER_NAME: 'LISTEN_PLAYER_NAME',             // 监听玩家发送昵称

    /***********************************************与音效模块对应的音效类别********************************************************* */
    ONE: 'one',                                           // 1分音效
    TWO: 'two',                                           // 2分音效
    THREE: 'three',                                       // 3分音效
    NOCOMPETE: 'nocompete',                               // 不叫音效
    PASS: 'pass',                                         // 要不起音效
    DEAL: 'deal',                                         // 管上音效
    CHUPAI: 'chupai',                                     // 打牌音效

    /***********************************************信息弹窗AlertBox对应的类别******************************************************** */
    WARN: 'warn',
    WIN: 'win',
    LOSE: 'lose',
    INFO: 'info',
};

export default Constants;