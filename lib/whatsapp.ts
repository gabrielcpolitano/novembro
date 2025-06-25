import { CartItem } from '@/contexts/cart-context'

export function generateWhatsAppMessage(items: CartItem[], total: number, customerInfo: any) {
  const productList = items.map(item => 
    `• ${item.name} - Qtd: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`
  ).join('\n')

  const message = `🎂 *NOVO PEDIDO - DOCE ENCANTO*

👤 *Dados do Cliente:*
Nome: ${customerInfo.name}
Telefone: ${customerInfo.phone}
E-mail: ${customerInfo.email}

📦 *Itens do Pedido:*
${productList}

💰 *Total: R$ ${total.toFixed(2)}*

📍 *Endereço de Entrega:*
${customerInfo.address}

📝 *Observações:*
${customerInfo.notes || 'Nenhuma observação'}

---
Pedido realizado através do site Doce Encanto`

  return encodeURIComponent(message)
}

export function getWhatsAppLink(message: string) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
  return `https://wa.me/${phoneNumber}?text=${message}`
}